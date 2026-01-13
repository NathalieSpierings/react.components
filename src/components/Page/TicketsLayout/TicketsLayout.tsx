import React, { ReactElement, useState } from 'react';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import { Dropdown } from '../../Forms/Dropdown';
import { Input } from '../../Forms/Input/Input';
import Icon from '../../UI/Icons/Icon/Icon';
import Avatar from '../../UI/Avatar/Avatar';
import AnimatedCheckbox from '../../UI/CheckboxAnimated/CheckboxAnimated';
import { Collection } from '../../UI/Collection';
import DismissButton from '../../UI/DismissButton/DismissButton';
import { ContentItemType } from '../../UI/ContentItem/ContentItem';
import Checkbox from '../../Forms/Checkbox/Checkbox';
import ArtEmptyData from '../../Base/Art/ArtEmptyData';

export interface TicketItemType {
    id: string;
    creatorId: string;
    creatorName: string;
    creatorEmail: string;
    subject: string | ReactElement;
    dateTime: string;
    message?: string | ReactElement;
    replies?: TicketItemType[];
}

export interface TicketLayoutProps {
    tickets: TicketItemType[] | undefined;
    selected: string[];
    setSelected: (selected: string[]) => void;
    searchPlaceholder?: string;
    showSearch?: boolean;
    showCheckAll?: boolean;
}

const isSelected = (ticket: TicketItemType, selected: string[]) => {
    return selected.includes(ticket.id);
};

const defaultSearch = (val: string, q: string) => {
    return !!~val.toLowerCase().indexOf(q.toLowerCase());
};

const TicketsLayout: React.FC<TicketLayoutProps> = ({
    tickets = [],
    selected,
    setSelected,
    showSearch = true,
    showCheckAll = true,
    searchPlaceholder = 'Zoeken...',
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const allSelected = tickets.length > 0 && selected.length == tickets.length;
    const [detailsOnMobile, setShowDetailsOnMobile] = useState(false);

    const currentTicket = tickets.find((ticket) => ticket.id === selected[0]);

    const selectAll = () => {
        setSelected(tickets.map((x) => x.id));
    };

    const selectNone = () => {
        setSelected([]);
    };

    tickets = tickets.filter((x) => {
        const subjectText = typeof x.subject === 'string' ? x.subject : '';
        return defaultSearch(`${x.creatorName}${x.creatorEmail}${subjectText}`, searchTerm);
    });

    const closeMobileTicketDetails = () => {
        setShowDetailsOnMobile(false);
    };

    const ticketCollection: ContentItemType[] = tickets.map((ticket) => ({
        id: ticket.id,
        prefix: (
            <Checkbox
                checked={isSelected(ticket, selected)}
                color={ColorDefinitions.Primary}
                onChange={() =>
                    setSelected(
                        isSelected(ticket, selected) ? selected.filter((x) => x != ticket.id) : [...selected, ticket.id]
                    )
                }
            />
        ),
        content: (
            <>
                <span className="subtitle">{ticket.creatorName}</span>
                <span className="email">&lt;{ticket.creatorEmail}&gt;</span>
                <span className="subject">{ticket.subject}</span>
            </>
        ),
        postfix: <span className="date">{ticket.dateTime}</span>,
    }));

    return (
        <div className={`ticket-layout ${detailsOnMobile ? 'ticket-details-shown' : ''}`}>
            {/* List */}
            <div className="ticket-layout__column ticket-layout__aside">
                <div className="tickets">
                    <div className="tickets__header">
                        <div className="content-item">
                            {showCheckAll ? (
                                <div className="actions">
                                    <AnimatedCheckbox
                                        checked={allSelected}
                                        onChange={() => (allSelected ? selectNone() : selectAll())}
                                    />
                                </div>
                            ) : null}

                            <div className="meta meta--end">
                                {showSearch ? (
                                    <div className="tickets__search">
                                        <Input
                                            onTextInput={setSearchTerm}
                                            inline={true}
                                            placeholder={searchPlaceholder}
                                            value={searchTerm}
                                        />
                                        <Icon icon={IconDefinitions.search} size={SizeDefinitions.Small} />
                                    </div>
                                ) : null}
                            </div>
                            <div className="actions">
                                <Dropdown
                                    dropdownToggle={{
                                        label: <Icon icon={IconDefinitions.ellipsis_h} variant="circle" />,
                                    }}
                                    menuItems={[
                                        {
                                            prefix: (
                                                <Icon icon={IconDefinitions.checkmark} size={SizeDefinitions.Tiny} />
                                            ),
                                            content: 'Markeer als afgehandeld',
                                        },
                                        {
                                            prefix: (
                                                <Icon icon={IconDefinitions.calendar_day} size={SizeDefinitions.Tiny} />
                                            ),
                                            content: 'Sorteer op datum',
                                        },
                                        {
                                            prefix: <Icon icon={IconDefinitions.user} size={SizeDefinitions.Tiny} />,
                                            content: 'Sorteer op naam',
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="tickets__list">
                        <Collection
                            items={ticketCollection}
                            itemBorder={'underlined'}
                            borderColor={ColorDefinitions.Surface}
                            selectable={true}
                            hoverable={true}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </div>
                </div>
            </div>

            {/* Message */}
            {currentTicket ? (
                <div className="ticket-layout__column ticket-layout__page">
                    <div className="ticket-layout__page__container">
                        <div className="ticket-layout__page__container__header">
                            <div className="content-item">
                                <div className="actions">
                                    <Avatar
                                        icon={IconDefinitions.user}
                                        size={SizeDefinitions.Small}
                                        background={ColorDefinitions.SurfaceDark}
                                    />
                                </div>
                                <div className="meta">
                                    <span className="ticket-title">{currentTicket?.subject}</span>
                                    <span className="ticket-email">&lt;{currentTicket?.creatorName}&gt;</span>
                                </div>
                                <div className="actions shown">
                                    <DismissButton dismissCss="ticket-toggle" onClick={closeMobileTicketDetails} />
                                </div>
                            </div>
                        </div>

                        <div className="ticket-layout__page__container__content">
                            <div className="ticket">
                                <div className="ticket__header">
                                    <div className="content-item">
                                        <div className="meta">
                                            <span className="ticket-subtitle">Aangemaakt op</span>
                                            <span className="ticket-date">{currentTicket?.dateTime}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="ticket__content">{currentTicket?.message}</div>
                            </div>

                            {currentTicket?.replies?.map((reply, idx) => (
                                <div key={"reply_" + idx} className="ticket ticket__reply">
                                    <div className="ticket__header">
                                        <div className="content-item">
                                            <div className="meta">
                                                <span className="ticket-subtitle">Aangemaakt op</span>
                                                <span className="ticket-date">{reply.dateTime}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ticket__content">{reply.message}</div>
                                </div>
                            ))}
                        </div>

                        <div className="ticket-layout__page__container__footer">
                            <div className="ticket-layout__page__container__footer__bubble">
                                <div className="ticket-layout__page__container__footer__bubble__container">hiero</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="empty-data">
                    <ArtEmptyData />
                    <p>Geen gegevens gevonden</p>
                </div>
            )}
        </div>
    );
};

export default TicketsLayout;
