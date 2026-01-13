import React from "react";
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from "../../lib/utils/definitions";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { Avatar, AvatarDefinitions } from "../../components/UI/Avatar";

const AvatarDemo: React.FC = () => {
    usePageTitle("Avatar", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Avatar", href: "/demo/avatar" },
    ]);

    return (
        <section>
            <h3>Default</h3>


            <div className="grid mb-3">
                <Avatar icon={IconDefinitions.user} size={SizeDefinitions.ExtraSmall} />
            </div>

            <div className="row">
                <div className="col-3">
                    <Avatar icon={IconDefinitions.user} />
                </div>
                <div className="col-3">
                    <Avatar imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                </div>
                <div className="col-3">
                    <Avatar square={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                </div>
                <div className="col-3">
                    <Avatar initials="NS" />
                </div>
            </div>

            <h1>Float</h1>
            <div className="row">
                <div className="col-3">
                    <Avatar float={true} icon={IconDefinitions.user} />
                </div>
                <div className="col-3">
                    <Avatar float={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                </div>
                <div className="col-3">
                    <Avatar float={true} square={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                </div>
                <div className="col-3">
                    <Avatar float={true} initials="NS" />
                </div>
            </div>
            <h1>Sizes</h1>
            <div className="row">
                <div className="col-3">
                    <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Tiny} />
                    <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraSmall} />
                    <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Small} />
                    <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Medium} />
                    <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Large} />
                    <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraLarge} />
                    <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraLarge2} />
                    <Avatar avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraLarge3} />
                </div>
                <div className="col-3">
                    <Avatar imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg" size={SizeDefinitions.Tiny} />
                    <Avatar imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg" size={SizeDefinitions.ExtraSmall} />
                    <Avatar imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg" size={SizeDefinitions.Small} />
                    <Avatar imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg" size={SizeDefinitions.Medium} />
                    <Avatar imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg" size={SizeDefinitions.Large} />
                    <Avatar imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg" size={SizeDefinitions.ExtraLarge} />
                    <Avatar imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg" size={SizeDefinitions.ExtraLarge2} />
                    <Avatar imageUrl="https://promeetec.nl/wp-content/uploads/2022/02/Promeetec-Gemakkelijk-declareren-VECOZO-scaled-1-1030x1030.jpeg" size={SizeDefinitions.ExtraLarge3} />
                </div>
                <div className="col-3">
                    <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Tiny} />
                    <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraSmall} />
                    <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Small} />
                    <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Medium} />
                    <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.Large} />
                    <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraLarge} />
                    <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraLarge2} />
                    <Avatar square={true} avatar={AvatarDefinitions.Female1} size={SizeDefinitions.ExtraLarge3} />
                </div>
                <div className="col-3">
                    <Avatar initials="NS" size={SizeDefinitions.Tiny} />
                    <Avatar initials="NS" size={SizeDefinitions.ExtraSmall} />
                    <Avatar initials="NS" size={SizeDefinitions.Small} />
                    <Avatar initials="NS" size={SizeDefinitions.Medium} />
                    <Avatar initials="NS" size={SizeDefinitions.Large} />
                    <Avatar initials="NS" size={SizeDefinitions.ExtraLarge} />
                    <Avatar initials="NS" size={SizeDefinitions.ExtraLarge2} />
                    <Avatar initials="NS" size={SizeDefinitions.ExtraLarge3} />
                </div>
            </div>

            <h1>Border</h1>
            <div className="row">
                <div className="col-3">
                    <Avatar icon={IconDefinitions.user} border={true} borderColor={ColorDefinitions.Theme100} />
                </div>
                <div className="col-3">
                    <Avatar border={true} borderColor={ColorDefinitions.Theme100} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                </div>
                <div className="col-3">
                    <Avatar border={true} borderColor={ColorDefinitions.Theme100} square={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                </div>
                <div className="col-3">
                    <Avatar border={true} borderColor={ColorDefinitions.Theme100} initials="NS" />
                </div>
            </div>

            <h1>Shadow</h1>
            <div className="row">
                <div className="col-3">
                    <Avatar icon={IconDefinitions.user} shadow={true} />
                </div>
                <div className="col-3">
                    <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                </div>
                <div className="col-3">
                    <Avatar shadow={true} square={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                </div>
                <div className="col-3">
                    <Avatar shadow={true} initials="NS" />
                </div>
            </div>

            <h1>Background</h1>
            <div className="row">
                <div className="col-3">
                    <Avatar icon={IconDefinitions.user} shadow={true} background={ColorDefinitions.SurfaceDark} />
                </div>
                <div className="col-3">
                    <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                </div>
                <div className="col-3">
                    <Avatar shadow={true} square={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                </div>
                <div className="col-3">
                    <Avatar shadow={true} initials="NS" background={ColorDefinitions.Blue} />
                </div>
            </div>

            <h3>With text</h3>
            <div className="avatar__text">
                <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                <div>
                    <div>Jese Leos</div>
                    <div>Joined in August 2014</div>
                </div>
            </div>

            <h3>Stacked</h3>
            <div className="row">
                <ul className="avatar-group">
                    <li>
                        <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                    </li>
                    <li>
                        <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                    </li>
                    <li>
                        <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                    </li>
                    <li>
                        <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                    </li>
                    <li>
                        <div className="avatar">
                            +4
                        </div>
                    </li>
                </ul>
            </div>

            <h3>Stacked sizes</h3>
            <div className="row">
                <div className="col-12">
                    <ul className="avatar-group avatar-group--tiny">
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <span className="avatar">
                                +4
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul className="avatar-group avatar-group--xs">
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <span className="avatar">
                                +4
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul className="avatar-group avatar-group--sm">
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <span className="avatar">
                                +4
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul className="avatar-group avatar-group--md">
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <span className="avatar ">
                                +4
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul className="avatar-group avatar-group--lg">
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <span className="avatar ">
                                +4
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul className="avatar-group avatar-group--xl">
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <span className="avatar ">
                                +4
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul className="avatar-group avatar-group--2xl">
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <span className="avatar ">
                                +4
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul className="avatar-group avatar-group--3xl">
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <Avatar shadow={true} imageUrl="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" alt="user avatar" />
                        </li>
                        <li>
                            <span className="avatar ">
                                +4
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

        </section>

    )
};

export default AvatarDemo;