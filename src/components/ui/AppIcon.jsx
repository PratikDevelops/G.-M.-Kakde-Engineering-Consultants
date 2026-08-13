'use client';

import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';
import * as HeroIconsSolid from '@heroicons/react/24/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

/**
 * @param {Object} props
 * @param {string} props.name
 * @param {'outline'|'solid'} [props.variant='outline']
 * @param {number} [props.size=24]
 * @param {string} [props.className='']
 * @param {() => void} [props.onClick]
 * @param {boolean} [props.disabled=false]
 */
function Icon({
    name,
    variant = 'outline',
    size = 24,
    className = '',
    onClick,
    disabled = false,
    ...props
}) {
    const iconSet = variant === 'solid' ? HeroIconsSolid : HeroIcons;
    const IconComponent = iconSet[name];

    if (!IconComponent) {
        return (
            <QuestionMarkCircleIcon
                width={size}
                height={size}
                className={`text-gray-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
                onClick={disabled ? undefined : onClick}
                {...props}
            />
        );
    }

    return (
        <IconComponent
            width={size}
            height={size}
            className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
            onClick={disabled ? undefined : onClick}
            {...props}
        />
    );
}

export default Icon;