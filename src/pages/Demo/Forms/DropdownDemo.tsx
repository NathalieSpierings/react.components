import React, { ReactElement } from "react";
import { Avatar, Multiselect, Title } from "../../../components";
import { Dropdown } from "../../../components/Forms/Dropdown";
import { Icon } from "../../../components/UI/Icons/Icon";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from "../../../lib/utils/definitions";

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
        postfix: (<small>54949883</small>),
        selected: true
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


            <h2>Default</h2>
            <Dropdown menuItems={menuItems} dropdownToggle={{ label: 'Click me!' }} />

            <h2 className="mt-5">Accent color</h2>
            <Dropdown menuItems={items} dropdownToggle={{ label: 'Click me!' }} accentColor={ColorDefinitions.Primary} />

            <h2 className="mt-5">Background color</h2>
            <Dropdown menuItems={menuItems} dropdownToggle={{ label: 'Click me!' }} background={ColorDefinitions.Olive} />




            <h2 className="mt-5">Ghost toggle</h2>
            <Dropdown menuItems={menuItems} dropdownToggle={{ label: 'Click me!', arrow: true, ghost: true }} />


            <h2 className="mt-5">Direction up</h2>
            <Dropdown menuItems={menuItems} dropdownToggle={{ label: 'Click me!' }} direction="up" />

            <h2 className="mt-5">Custom content</h2>
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




            <Title className="mt-5">Variants</Title>
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
                        dropdownToggle={{ label: 'Click me!', arrow: false }}
                    />
                </div>
                <div>
                    <h5>Toggle icon prefix</h5>
                    <Dropdown menuItems={menuItems}
                        dropdownToggle={{
                            arrow: false,
                            prefix: (<Icon icon={IconDefinitions.ellipsis_h} ring ringSize={"ring-2"} ringColor={ColorDefinitions.Blue} rounded={SizeDefinitions.Full} />)
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