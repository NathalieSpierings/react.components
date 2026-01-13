import { ChangeEvent, DragEventHandler, ReactElement, useRef, useState } from 'react';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import { filesize, matchFileType, matchKlantNummer } from '../../../lib/utils/files';
import Button from '../../UI/Button/Button';
import { Collection } from '../../UI/Collection';
import { DividerSplitted } from '../../UI/DividerSplitted';
import FileIcon, { FileToIconVariant } from '../../UI/Icons/FileIcon/FileIcon';
import Icon from '../../UI/Icons/Icon/Icon';
import Modal from '../../UI/Modal/Modal';
import Tooltip from '../../UI/Tooltip/Tooltip';

export interface FileuploadValidationError {
    fileName: string;
    reasons: (ReactElement | string)[];
}

export enum FileSelectError {
    InvalidFileType = 0,
    OneFileAllowed = 1,
}

export type ErrFunc = (error: FileSelectError, details?: ReactElement | string) => void;

interface ZipValidationResult {
    fileCount: number;
    containsFolder: boolean;
    containsZip: boolean;
}


const validateZipFile = async (file: File): Promise<ZipValidationResult> => {
    const buffer = await file.arrayBuffer();
    const view = new DataView(buffer);

    let fileCount = 0;
    let containsFolder = false;
    let containsZip = false;
    let offset = 0;

    while (offset < view.byteLength - 4) {
        // Lokale file header signature: 0x04034b50
        if (view.getUint32(offset, true) === 0x04034b50) {
            const fileNameLength = view.getUint16(offset + 26, true);
            const extraFieldLength = view.getUint16(offset + 28, true);
            const fileNameBytes = new Uint8Array(buffer, offset + 30, fileNameLength);
            const decoder = new TextDecoder();
            const fileName = decoder.decode(fileNameBytes);

            if (fileName.endsWith('/')) {
                containsFolder = true;
            }

            if (fileName.toLowerCase().endsWith('.zip')) {
                containsZip = true;
            }

            fileCount++;
            offset += 30 + fileNameLength + extraFieldLength;
        } else {
            offset++;
        }
    }

    return { fileCount, containsFolder, containsZip };
};


export interface FileSelectProps {
    selectedFiles: File[];
    setSelectedFiles: (files: File[]) => void;
    multiple?: boolean;
    maxTotalSize?: number;
    accept?: string[];
    validateKlantNummer?: boolean;
    validateZip?: boolean;
    onError?: ErrFunc;
    rounded?: SizeDefinitions;
    backgroundColor?: ColorDefinitions;
    borderColor?: ColorDefinitions;
    colorMute?: ColorDefinitions;
    accentColor?: ColorDefinitions;
    buttonColor?: ColorDefinitions;
    collectionScrollable?: boolean;
    collectionScrollheight?: string;
    collectionColorMute?: ColorDefinitions;
    collectionColor?: ColorDefinitions;
    collectionBackground?: ColorDefinitions;
    collectionBorderColor?: ColorDefinitions;
    collectionItemBorder?: 'bordered' | 'underlined';
    collectionRounded?: SizeDefinitions;
    collectionCompact?: boolean;
    collectionMedium?: boolean;
    collectionHoverable?: boolean;
    collectionSelectable?: boolean;
    collectionSelectMultiple?: boolean;
    collectionCss?: string;
}


const FileSelect = ({
    selectedFiles,
    setSelectedFiles,
    multiple = false,
    maxTotalSize = 1024 * 1024 * 50,
    accept = [".pdf", ".doc", ".docx", ".xls", ".xlsx", ".csv", ".txt", ".ei", ".xml", ".zip"],
    validateKlantNummer = false,
    validateZip = false,
    onError,
    rounded,
    backgroundColor,
    borderColor,
    colorMute,
    accentColor,
    buttonColor,
    collectionScrollable,
    collectionScrollheight,
    collectionColorMute,
    collectionColor,
    collectionBackground,
    collectionBorderColor,
    collectionItemBorder,
    collectionRounded,
    collectionCompact,
    collectionMedium,
    collectionHoverable,
    collectionSelectable,
    collectionSelectMultiple,
    collectionCss = '',
}: FileSelectProps): ReactElement => {

    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [errorModalTitle, setErrorModalTitle] = useState<string>("Er is een fout opgetreden");
    const [errorModalContent, setErrorModalContent] = useState<ReactElement | null>(null);

    const handleError: ErrFunc = onError ?? ((_, details) => setErrorModalContent(<>{details}</>));

    const handleFiles = async (files: File[]) => {
        if (!files.length) return;

        let validFiles: File[] = [];
        let fileErrors: FileuploadValidationError[] = [];

        for (const file of files) {
            const reasons: (ReactElement | string)[] = [];

            // ZIP-validatie
            if (validateZip && file.name.endsWith('.zip')) {
                const zipValidation = await validateZipFile(file);

                if (zipValidation.containsFolder) {
                    reasons.push(
                        <>Bevat een folder</>
                    );
                }

                if (zipValidation.containsZip) {
                    reasons.push(
                        <>Bevat een ander ZIP-bestand</>
                    );
                }

                if (zipValidation.fileCount > 1) {
                    reasons.push(
                        <>Bevat meerdere bestanden (<strong>maximaal 1 toegestaan</strong>)</>
                    );
                }
            }

            // Klantnummer validatie
            if (validateKlantNummer && !matchKlantNummer(true, file)) {
                reasons.push(
                    <>Bestandsnaam bevat geen geldig klantnummer: <code>{file.name}</code></>
                );
            }

            // Filetype validatie
            if (accept && !matchFileType(accept, file)) {
                reasons.push(
                    <>Ongeldig bestandstype</>
                );
            }

            if (reasons.length === 0) {
                validFiles.push(file);
            } else {
                fileErrors.push({
                    fileName: file.name,
                    reasons
                });
            }
        }

        // Multiple=false check
        if (!multiple && validFiles.length > 1) {
            const rejected = validFiles.slice(1);

            for (const file of rejected) {
                fileErrors.push({
                    fileName: file.name,
                    reasons: ['Er kan maar één bestand worden geüpload']
                });
            }

            validFiles = validFiles.slice(0, 1);
        }

        if (fileErrors.length > 0) {
            setErrorModalTitle("Ongeldige bestanden gedetecteerd");
            handleError(
                FileSelectError.InvalidFileType,
                <>
                    <p>De volgende bestanden kunnen niet worden geüpload:</p>
                    <ul className="list-upload-warnings">
                        {fileErrors.map((err) => (
                            <li key={err.fileName}>
                                <strong>{err.fileName}</strong>
                                <ul>
                                    {err.reasons.map((reason, idx) => (
                                        <li key={'warning_' + idx}>{reason}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <p>Deze bestanden zijn uitgesloten van upload.</p>
                </>
            );
        }

        if (validFiles.length === 0) return;

        setSelectedFiles(multiple ? [...selectedFiles, ...validFiles] : validFiles);
    };



    const handleDrag: DragEventHandler = function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === 'dragenter') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop: DragEventHandler = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        handleFiles(Array.from(e.dataTransfer.files));
    };

    const onFileChange = (event: ChangeEvent) => {
        const files = (event.target as HTMLInputElement).files;
        handleFiles(files ? Array.from(files) : []);
    };

    const cls = [
        'fileupload__container',
        borderColor ? `border-${borderColor}` : '',
        colorMute ? `text-mute-${colorMute}` : '',
        backgroundColor ? `bg-${backgroundColor}` : '',
        rounded ? `rounded-${rounded}` : '',
        dragActive ? 'drag-active' : '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <>
            {errorModalContent && (
                <Modal
                    variant="negative"
                    isOpen={true}
                    title={errorModalTitle}
                    onClose={() => setErrorModalContent(null)}
                    footerActions={
                        <Button color={ColorDefinitions.Red} shadow onClick={() => setErrorModalContent(null)}>
                            Ok
                        </Button>
                    }
                >
                    {errorModalContent}
                </Modal>
            )}


            <div className={`fileupload`}>
                <section className={cls}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onDragOver={handleDrag}
                    aria-label="File drop zone"
                >
                    <input
                        ref={inputRef}
                        onChange={onFileChange}
                        style={{ pointerEvents: 'none' }}
                        className="fileupload__input"
                        type="file"
                        multiple={multiple}
                        accept={accept ? accept.join(',') : undefined}
                    />

                    <Icon icon={IconDefinitions.cloud_upload} duotone={true} size={SizeDefinitions.ExtraLarge2} />

                    <p>
                        <strong>Drop of sleep</strong> bestanden om te uploaden
                    </p>

                    <DividerSplitted label="of selecteer bestanden" dividerSplittedCss="mt-1 mb-1" />

                    <Button
                        color={buttonColor}
                        shadow
                        style={{ pointerEvents: 'all' }}
                        onClick={() => inputRef.current?.click()}
                        onDragLeave={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                        }}
                    >
                        Selecteer bestanden
                    </Button>
                </section>

                <div className="fileupload__info">
                    <small>
                        Maximum bestandgrootte: <strong>{filesize(maxTotalSize)}</strong>
                    </small>
                    {selectedFiles.length && multiple ? (
                        <div className="fileupload__info__totalfiles">
                            Aantal bestanden: <span className={`text-${accentColor}`}> {selectedFiles.length}</span>
                        </div>
                    ) : null}
                </div>
            </div>

            {
                selectedFiles.length > 0 && (
                    <Collection
                        scrollable={collectionScrollable}
                        scrollheight={collectionScrollheight}
                        colorMute={collectionColorMute}
                        color={collectionColor}
                        background={collectionBackground}
                        borderColor={collectionBorderColor}
                        itemBorder={collectionItemBorder}
                        rounded={collectionRounded}
                        compact={collectionCompact}
                        medium={collectionMedium}
                        hoverable={collectionHoverable}
                        selectable={collectionSelectable}
                        selectMultiple={collectionSelectMultiple}
                        collectionCss={collectionCss}
                        items={selectedFiles?.map((item, idx) => ({
                            id: idx.toString(),
                            prefix: (
                                <Icon svg={<FileIcon variant={FileToIconVariant(item)} />} duotone={true} />
                            ),
                            title: item.name,
                            subtitle: (
                                <small className="text-mute">{filesize(item.size)} </small>
                            ),
                            postfix: (
                                <Tooltip content="Verwijderen">
                                    <Icon
                                        variant="circle"
                                        hoverColor={ColorDefinitions.Mute}
                                        hoverBorderColor={ColorDefinitions.Red}
                                        icon={IconDefinitions.bin}
                                        size={SizeDefinitions.Small}
                                        onClick={() => {
                                            const files = selectedFiles.filter((file) => file != item);
                                            if (!filesize.length) {
                                                inputRef.current!.value = '';
                                            }
                                            setSelectedFiles(files);
                                        }}
                                    />
                                </Tooltip>
                            ),
                        }))}
                    />
                )
            }


        </>
    );
};

export default FileSelect;
