import React, { ImgHTMLAttributes } from 'react';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';

// import Female1 from '../../../assets/images/avatar_female_1.jpg';
// import Female2 from '../../../assets/images/avatar_female_2.jpg';
// import Female3 from '../../../assets/images/avatar_female_3.jpg';
// import Female4 from '../../../assets/images/avatar_female_4.jpg';
// import Female5 from '../../../assets/images/avatar_female_5.jpg';
// import Female6 from '../../../assets/images/avatar_female_6.jpg';
// import Male1 from '../../../assets/images/avatar_male_1.png';
// import Male2 from '../../../assets/images/avatar_male_2.jpg';
// import Male3 from '../../../assets/images/avatar_male_3.jpg';
// import Male4 from '../../../assets/images/avatar_male_4.jpg';
// import Male5 from '../../../assets/images/avatar_male_5.jpg';
// import Male6 from '../../../assets/images/avatar_male_6.jpg';

// export enum AvatarDefinitions {
//     Female1 = 'Female1',
//     Female2 = 'Female2',
//     Female3 = 'Female3',
//     Female4 = 'Female4',
//     Female5 = 'Female5',
//     Female6 = 'Female6',
//     Male1 = 'Male1',
//     Male2 = 'Male2',
//     Male3 = 'Male3',
//     Male4 = 'Male4',
//     Male5 = 'Male5',
//     Male6 = 'Male6',
// }

// export const avatarMap: Record<AvatarDefinitions, string> = {
//     [AvatarDefinitions.Female1]: Female1,
//     [AvatarDefinitions.Female2]: Female2,
//     [AvatarDefinitions.Female3]: Female3,
//     [AvatarDefinitions.Female4]: Female4,
//     [AvatarDefinitions.Female5]: Female5,
//     [AvatarDefinitions.Female6]: Female6,
//     [AvatarDefinitions.Male1]: Male1,
//     [AvatarDefinitions.Male2]: Male2,
//     [AvatarDefinitions.Male3]: Male3,
//     [AvatarDefinitions.Male4]: Male4,
//     [AvatarDefinitions.Male5]: Male5,
//     [AvatarDefinitions.Male6]: Male6,
//     // ...
// };


export enum AvatarDefinitions {
    Female1 = 'female-1',
    Female2 = 'female-2',
    Female3 = 'female-3',
    Female4 = 'female-4',
    Female5 = 'female-5',
    Female6 = 'female-6',
    Male1 = 'male-1',
    Male2 = 'male-2',
    Male3 = 'male-3',
    Male4 = 'male-4',
    Male5 = 'male-5',
    Male6 = 'male-6',
}

const avatarExtensions: Partial<Record<AvatarDefinitions, 'jpg' | 'png'>> = {
    [AvatarDefinitions.Male1]: 'png',
};


export const getAvatarUrl = (avatar: AvatarDefinitions): string => {
    const ext = avatarExtensions[avatar] ?? 'jpg';
    return new URL(
        `../../../assets/images/avatar/${avatar}.${ext}`,
        import.meta.url
    ).href;
};

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    avatarCss?: string;
    initials?: string;
    avatar?: AvatarDefinitions;
    icon?: IconDefinitions;
    iconDuotone?: boolean;
    imageUrl?: string;
    border?: boolean;
    shadow?: boolean;
    borderColor?: ColorDefinitions;
    background?: ColorDefinitions;
    size?: SizeDefinitions;
    square?: boolean;
    float?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
    avatarCss = '',
    initials,
    avatar,
    imageUrl,
    icon,
    iconDuotone,
    size,
    square,
    border,
    shadow,
    borderColor,
    background,
    float,
    ...rest
}) => {
    const cls = [
        'avatar',
        avatarCss,
        square ? 'avatar-square' : '',
        border ? 'avatar--border' : '',
        shadow ? 'avatar--shadow' : '',
        borderColor ? `border-${borderColor}` : '',
        background ? `bg-${background}` : '',
        float ? 'avatar--float' : '',
        size ? `avatar--${size}` : '',
    ]
        .filter(Boolean)
        .join(' ');

    let avatarContent: React.ReactNode = null;

    if (initials) {
        avatarContent = <span className="avatar__name">{initials}</span>;
    } else if (icon) {
        avatarContent = (
            <svg xmlns="http://www.w3.org/2000/svg" className={iconDuotone ? 'icon-duotone' : ''} >
                <use xlinkHref={`#svg_icon_${icon}`} />
            </svg>
        );
    } else if (imageUrl) {
        avatarContent = <img src={imageUrl} alt="Avatar" />;
    } else if (avatar) {
        avatarContent = <img src={getAvatarUrl(avatar)} alt="Avatar" />;
    }

    return (
        <div className={cls} {...rest}>
            {avatarContent}
        </div>
    );
};

export default Avatar;
