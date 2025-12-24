import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from '../../../lib/utils/definitions';
import Icon from '../../UI/Icons/Icon/Icon';

export interface SliderProps extends PropsWithChildren { }

const SCROLL_AMOUNT = 160;

const Slider: React.FC<SliderProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        containerRef.current?.scrollBy({
            left: -SCROLL_AMOUNT,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        containerRef.current?.scrollBy({
            left: SCROLL_AMOUNT,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                scrollLeft();
            } else if (e.key === 'ArrowRight') {
                scrollRight();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="slider">
            <Icon
                icon={IconDefinitions.angle_left}
                background={ColorDefinitions.SurfaceLight}
                ring="ring-1"
                rounded={SizeDefinitions.Full}
                ringOffsetBorderColor={ColorDefinitions.Primary}
                ringOffsetColor={ColorDefinitions.Theme100}
                color={ColorDefinitions.Primary}
                onClick={scrollLeft}
            />

            <div className="slider__container" ref={containerRef}>
                {children}
            </div>
            <Icon
                icon={IconDefinitions.angle_right}
                rounded={SizeDefinitions.Full}
                background={ColorDefinitions.SurfaceLight}
                ring="ring-1"
                ringOffsetBorderColor={ColorDefinitions.Primary}
                ringOffsetColor={ColorDefinitions.Theme100}
                color={ColorDefinitions.Primary}
                onClick={scrollRight}
            />
        </div>
    );
};

export default Slider;
