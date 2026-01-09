import React, { ReactElement } from "react";
import usePageTitle from "../../lib/hooks/usePageTitle";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import { Dropdown } from "../../components/Forms/Dropdown";
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from "../../lib/utils/definitions";
import { Icon } from "../../components/UI/Icons/Icon";
import { Avatar, AvatarDefinitions, Multiselect, Title } from "../../components";

const DropdownDemo = (): ReactElement => {

    usePageTitle("Dropdown", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Dropdown", href: "/demo/dropdown" },
    ]);

    const menuItems = [
        { id: "1", content: "Profile", onClick: () => alert("Profile clicked") },
        { id: "2", content: "Settings", onClick: () => alert("Settings clicked") },
        { id: "3", content: "Logout", onClick: () => alert("Logout clicked") },
    ];

    const [selected, setSelected] = React.useState<string[]>([]);

    const items = [{
        id: "1",
        content: "Option 1",
        postfix: (<small>54949881</small>)
    },
    {
        id: "2",
        content: "Option 2",
        postfix: (<small>54949882</small>)
    },
    {
        id: "3",
        content: "Option 3",
        postfix: (<small>54949883</small>)
    },
    {
        id: "4",
        content: "Option 4",
        postfix: (<small>54949884</small>)
    }
        , {
        id: "5",
        content: "Option 5",
        postfix: (<small>54949885</small>)
    }]



    return (
        <section className="centered centered--wide">

            <div className="grid">
                <div>
                    <h5>Default</h5>
                    <Dropdown menuItems={menuItems} dropdownToggle={{ label: 'Click me!' }} />
                </div>
                <div>
                    <h5>Ghost</h5>
                    <Dropdown menuItems={menuItems} dropdownToggle={{ label: 'Click me!',  arrow:true, ghost: true }}/>
                </div>
                <div>
                    <h5>Direction up</h5>
                    <Dropdown
                        direction="up"
                        menuItems={menuItems}
                        dropdownToggle={{ label: 'Click me!' }}
                    />
                </div>
                <div>
                    <h5>Background</h5>
                    <Dropdown
                        background={ColorDefinitions.Olive}
                        menuItems={menuItems}
                        dropdownToggle={{ label: 'Click me!' }}
                    />
                </div>
                <div>
                    <h5>Custom content</h5>
                    <Dropdown dropdownToggle={{ label: 'Click me!' }} >
                        <Multiselect
                            background={ColorDefinitions.SurfaceDark}
                            title="My label goes here..."
                            items={items}
                            selected={selected}
                            setSelected={setSelected}
                            collectionBorderColor={ColorDefinitions.SurfaceDark}
                            collectionItemBorder="underlined"
                        />
                    </Dropdown>
                </div>
            </div>

            <Title>Variants</Title>
            <div className="grid mt-3">
                <div>
                    <h5>Wth heading</h5>
                    <Dropdown menuItems={menuItems} dropdownToggle={{ label: 'Click me!' }} dropdownHeader={{ content: (<>Welcome <strong>&nbsp; Guest</strong></>) }} />
                </div>
                <div>
                    <h5>Wth heading and border</h5>
                    <Dropdown
                        menuItems={menuItems}
                        dropdownToggle={{ label: 'Click me!' }}
                        dropdownHeader={{
                            content: (<>Welcome <strong>&nbsp; Guest</strong></>),
                            borderColor: ColorDefinitions.Surface
                        }} />
                </div>
                <div>
                    <h5>Wth divider</h5>
                    <Dropdown
                        dropdownToggle={{ label: 'Click me!' }}
                        dropdownHeader={{ content: (<>Welcome <strong>&nbsp; Guest</strong></>) }}
                        menuItems={[
                            { content: "Profile", onClick: () => alert("Profile clicked") },
                            { content: "Settings", onClick: () => alert("Settings clicked") },
                            { divider: true },
                            { content: "Logout", onClick: () => alert("Logout clicked") },
                        ]}
                    />
                </div>
            </div>

            <Title>Dropdown toggle</Title>
            <div className="grid mt-3">
                <div>
                    <h5>No arrow</h5>
                    <Dropdown
                        background={ColorDefinitions.Olive}
                        menuItems={menuItems}
                        dropdownToggle={{ label: 'Click me!', enableDropdownArrow: false }}
                    />
                </div>
                <div>
                    <h5>Toggle icon prefix</h5>
                    <Dropdown menuItems={menuItems}
                        dropdownToggle={{
                            enableDropdownArrow: false,
                            prefix: (<Icon icon={IconDefinitions.ellipsis_h} ring={"ring-2"} ringColor={ColorDefinitions.Blue} rounded={SizeDefinitions.Full} />)
                        }} />
                </div>

                <div>
                    <h5>With avatar</h5>
                    <Dropdown menuItems={menuItems}
                        dropdownToggle={{
                            label: 'Click me!',
                            prefix: (<Avatar icon={IconDefinitions.user} />)
                        }}
                    />
                </div>

                <div>
                    <h5>Toggle as input</h5>
                    <Dropdown menuItems={menuItems}
                        dropdownToggle={{
                            renderAsInput: true,
                            label: 'Click me!'
                        }}
                    />
                </div>
            </div>

            <Title>Postfix</Title>
            <div className="grid mt-3">
                <div>
                    <h5>Postfix</h5>
                    <Dropdown
                        menuItems={[{
                            content: 'Menu item one',
                            postfix: (<Icon icon={IconDefinitions.star} />),
                            onClick: () => console.log('You clicked item 1')
                        },
                        {
                            content: 'Menu item two',
                            postfix: (<Icon icon={IconDefinitions.cog} />),
                            onClick: () => console.log('You clicked item 2')
                        },
                        {
                            dividerColor: ColorDefinitions.Surface
                        },
                        {
                            content: 'Menu item three',
                            postfix: (<Icon icon={IconDefinitions.power} />),
                            onClick: () => console.log('You clicked item 3')
                        }]}
                        dropdownToggle={{ label: 'Click me!' }}
                        dropdownHeader={{
                            content: (<>Welcome <strong>&nbsp; Guest</strong></>),
                            borderColor: ColorDefinitions.Surface
                        }} />
                </div>
                <div>
                    <h5>Postfix accent</h5>

                    <Dropdown menuItems={[{
                        content: 'Menu item one',
                        postfix: (<span><Icon icon={IconDefinitions.star} color={ColorDefinitions.Violet} /></span>),
                        onClick: () => console.log('You clicked item 1')
                    },
                    {
                        content: 'Menu item two',
                        postfix: (<span><Icon icon={IconDefinitions.cog} color={ColorDefinitions.Violet} /></span>),
                        onClick: () => console.log('You clicked item 2')
                    },
                    {
                        dividerColor: ColorDefinitions.Surface
                    },
                    {
                        content: 'Menu item three',
                        postfix: (<span><Icon icon={IconDefinitions.power} color={ColorDefinitions.Violet} /></span>),
                        onClick: () => console.log('You clicked item 3')
                    }]}
                        dropdownToggle={{ label: 'Click me!' }}
                        dropdownHeader={{
                            content: (<>Welcome <strong>&nbsp; Guest</strong></>),
                            borderColor: ColorDefinitions.Surface
                        }} />
                </div>
            </div>


            <Title>Prefix</Title>
            <div className="grid mt-3">
                <div>
                    <h5>Prefix</h5>
                    <Dropdown menuItems={[{
                        content: 'Menu item one',
                        prefix: (<Icon icon={IconDefinitions.star} />),
                        onClick: () => console.log('You clicked item 1')
                    },
                    {
                        content: 'Menu item two',
                        prefix: (<Icon icon={IconDefinitions.cog} />),
                        onClick: () => console.log('You clicked item 2')
                    },
                    {
                        dividerColor: ColorDefinitions.Surface
                    },
                    {
                        content: 'Menu item three',
                        prefix: (<Icon icon={IconDefinitions.power} />),
                        onClick: () => console.log('You clicked item 3')
                    }]} dropdownToggle={{ label: 'Click me!' }} dropdownHeader={{
                        content: (<>Welcome <strong>&nbsp; Guest</strong></>),
                        borderColor: ColorDefinitions.Surface
                    }} />
                </div>
                <div>
                    <h5>Prefix accent</h5>

                    <Dropdown
                        dropdownToggle={{ label: 'Click me!' }}
                        dropdownHeader={{
                            content: (<>Welcome <strong>&nbsp; Guest</strong></>),
                            borderColor: ColorDefinitions.Surface
                        }}
                        menuItems={[{
                            content: 'Menu item one',
                            prefix: (<span><Icon icon={IconDefinitions.star} color={ColorDefinitions.Violet} /></span>),
                            onClick: () => console.log('You clicked item 1')
                        },
                        {
                            content: 'Menu item two',
                            prefix: (<span><Icon icon={IconDefinitions.cog} color={ColorDefinitions.Violet} /></span>),
                            onClick: () => console.log('You clicked item 2')
                        },
                        {
                            dividerColor: ColorDefinitions.Violet
                        },
                        {
                            content: 'Menu item three',
                            prefix: (<span><Icon icon={IconDefinitions.power} color={ColorDefinitions.Violet} /></span>),
                            onClick: () => console.log('You clicked item 3')
                        }]}
                    />
                </div>
            </div>

        </section>
    )
}
export default DropdownDemo;