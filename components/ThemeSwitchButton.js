import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../context/UseTheme'
import { Switch } from 'react-native-paper'

export default function ThemeSwitchButton() {
    const { isDarkMode, toggleDarkMode } = useTheme()
  return (
    <Switch value={isDarkMode} onValueChange={toggleDarkMode}/>
  )
}