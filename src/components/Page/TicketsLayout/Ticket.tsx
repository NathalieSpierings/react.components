import React, { ReactElement } from 'react';
import Avatar from '../../UI/Avatar/Avatar';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import { DismissButton } from '../../UI/DismissButton';

export interface TicketItem {
    id: string | number;
    creatorId: string;
    creatorName: string;
    creatorEmail: string;
    subject: string | ReactElement;
    dateTime: string;
    message?: string | ReactElement;
    replies?: TicketItem[];
}

export interface TicketProps {
    ticket: TicketItem;
}

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
    const closeMobileTicketDetails = () => { };

    return (
        <>
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
                        <span className="ticket-title">{ticket.subject}</span>
                        <span className="ticket-email">&lt;{ticket.creatorName}&gt;</span>
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
                                <span className="ticket-date">{ticket.dateTime}</span>
                            </div>
                        </div>
                    </div>

                    <div className="ticket__content">{ticket.message}</div>
                </div>

                {ticket?.replies?.map((reply, idx) => (
                    <div key={"ticket_reply_" + idx} className="ticket ticket__reply">
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
        </>
    );
};

export default Ticket;
