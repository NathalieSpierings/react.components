import React from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { ContentItem } from "../../components/UI/ContentItem";
import { Icon } from "../../components/UI/Icons/Icon";
import { IconDefinitions } from "../../lib/utils/definitions";
import { Title } from "../../components/Typography/Title";
import { Subtitle } from "../../components/Typography/Subtitle";

const ContentItemDemo: React.FC = () => {

    usePageTitle("Content item", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Content item", href: "/demo/contentitem" },
    ]);

    return (
        <>
            <h3>Default</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
                content: <p>Content goes here</p>,
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />

            <h3>Separator</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
                separatorAfterPrefix: true,
                separatorAfterMeta: true,
                content: <Title>Content goes here</Title>,
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />

            <h3>PrefixOnly</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
            }} />

            <h3>MetaOnly</h3>
            <ContentItem item={{
                id: '1',
                content: <h4>Content goes here</h4>,
            }} />

            <h3>PostfixOnly</h3>
            <ContentItem item={{
                id: '1',
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />

            <h3>PrefixAndMeta</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
                content: <h4>Content goes here</h4>,
            }} />

            <h3>PostfixAndMeta</h3>
            <ContentItem item={{
                id: '1',
                postfix: <Icon icon={IconDefinitions.bin} />,
                content: <h4>Content goes here</h4>,
            }} />

            <h3>PrefixItemPositionStart</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
                prefixItemPosition: 'item-start',
                content: <Title>Content goes here</Title>,
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />

            <h3>PrefixItemPositionCenter</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
                prefixItemPosition: 'item-center',
                content: <Title>Content goes here</Title>,
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />


            <h3>PrefixItemPositionEnd</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
                prefixItemPosition: 'item-end',
                content: <Title>Content goes here</Title>,
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />



            <h3>MetaItemPositionStart</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
                contentItemPosition: 'item-start',
                content: (
                    <>
                        <Title>Title</Title>
                        <Subtitle>Subtitle</Subtitle>
                    </>
                ),
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />

            <h3>MetaItemPositionCenter</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
                contentItemPosition: 'item-center',
                content: (
                    <>
                        <Title>Title</Title>
                        <Subtitle>Subtitle</Subtitle>
                    </>
                ),
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />


            <h3>MetaItemPositionEnd</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
                contentItemPosition: 'item-end',
                content: (
                    <>
                        <Title>Title</Title>
                        <Subtitle>Subtitle</Subtitle>
                    </>
                ),
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />

            <h3>MetaJustifyPositionStart</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Title>Action</Title>,
                contentJustifyPosition: 'justify-start',
                content: <p>Content goes here</p>,
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />


            <h3>MetaJustifyPositionCenter</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Title>Action</Title>,
                contentJustifyPosition: 'justify-center',
                content: <p>Content goes here</p>,
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />

            <h3>MetaJustifyPositionEnd</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Title>Action</Title>,
                contentJustifyPosition: 'justify-end',
                content: <p>Content goes here</p>,
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />

            <h3>PostfixItemPositionStart</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
                postfixItemPosition: 'item-start',
                content: <Title>Content goes here</Title>,
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />

            <h3>PostfixItemPositionCenter</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
                postfixItemPosition: 'item-center',
                content: <Title>Content goes here</Title>,
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />

            <h3>PostfixItemPositionEnd</h3>
            <ContentItem item={{
                id: '1',
                prefix: <Icon icon={IconDefinitions.bin} />,
                postfixItemPosition: 'item-end',
                content: <Title>Content goes here</Title>,
                postfix: <Icon icon={IconDefinitions.bin} />,
            }} />
        </>
    )
};

export default ContentItemDemo;