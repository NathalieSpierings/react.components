import IconesFilePdf from './IconesFilePdf';
import IconesFileSheet from './IconesFileSheet';
import IconesFileText from './IconesFileText';
import IconesFileZip from './IconesFileZip';
import IconesFolder from './IconesFolder';
import IconesFolderOpen from './IconesFolderOpen';
import IconesSupportQuestion from './IconesSupportQuestion';
import IconesFolderArchive from './IconesFolderArchive';
import IconesFolderArchiveOpen from './IconesFolderArchiveOpen';
import IconesFolderWarning from './IconesFolderWarning';
import IconesFolderWarningOpen from './IconesFolderWarningOpen';
import IconesFolderBell from './IconesFolderBell';
import IconesFolderBellOpen from './IconesFolderBellOpen';
import IconesFolderBin from './IconesFolderBin';
import IconesFolderBinOpen from './IconesFolderBinOpen';
import { IconesDefinitions } from '../../../../lib/utils/definitions';

export const IconesMap: Record<IconesDefinitions, React.FC<React.SVGProps<SVGSVGElement>>> = {
    [IconesDefinitions.FilePdf]: IconesFilePdf,
    [IconesDefinitions.FileSheet]: IconesFileSheet,
    [IconesDefinitions.FileText]: IconesFileText,
    [IconesDefinitions.FileZip]: IconesFileZip,
    [IconesDefinitions.Folder]: IconesFolder,
    [IconesDefinitions.FolderOpen]: IconesFolderOpen,
    [IconesDefinitions.FolderBin]: IconesFolderBin,
    [IconesDefinitions.FolderBinOpen]: IconesFolderBinOpen,
    [IconesDefinitions.FolderArchive]: IconesFolderArchive,
    [IconesDefinitions.FolderArchiveOpen]: IconesFolderArchiveOpen,
    [IconesDefinitions.FolderBell]: IconesFolderBell,
    [IconesDefinitions.FolderBellOpen]: IconesFolderBellOpen,
    [IconesDefinitions.FolderWarning]: IconesFolderWarning,
    [IconesDefinitions.FolderWarningOpen]: IconesFolderWarningOpen,
    [IconesDefinitions.SupportQuestion]: IconesSupportQuestion,
};
