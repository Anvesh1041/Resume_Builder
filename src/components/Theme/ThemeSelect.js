import { HStack, useRadioGroup } from '@chakra-ui/react'
import React from 'react'
import { useResume } from '../../Context';
import ThemeOption from './ThemeOption'

const ThemeSelect = () => {
    const options = ['#9F7AEA', '#48BB78', '#0BC5EA', '#A0AEC0', '#E53E3E', '#DD6B20','#F15BA6','#4299E1']

    const { theme, setTheme } = useResume();

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'color',
        value: theme,
        onChange: setTheme,
    })

    const group = getRootProps()

    return (
        <HStack {...group}>
            {options.map((value) => {
                const radio = getRadioProps({ value })
                return (
                    <ThemeOption key={value} {...radio}>
                        {value}
                    </ThemeOption>
                )
            })}
        </HStack>
    )
}

export default ThemeSelect
