// utils/settingsClient.js

import Cookies from 'js-cookie'

// Config Imports
import themeConfig from '@configs/themeConfig'

export const getSettingsFromCookie = () => {
  const cookieName = themeConfig.settingsCookieName
  const cookieValue = Cookies.get(cookieName)

  try {
    return cookieValue ? JSON.parse(cookieValue) : {}
  } catch (err) {
    console.error('Invalid settings cookie', err)
    return {}
  }
}

export const getMode = () => {
  const settingsCookie = getSettingsFromCookie()

  // Get mode from cookie or fallback to theme config
  return settingsCookie.mode || themeConfig.mode
}

export const getSystemMode = () => {
  const mode = getMode()
  const colorPrefCookie = Cookies.get('colorPref') || 'light'

  return (mode === 'system' ? colorPrefCookie : mode) || 'light'
}

export const getServerMode = () => {
  const mode = getMode()
  const systemMode = getSystemMode()

  return mode === 'system' ? systemMode : mode
}

export const getSkin = () => {
  const settingsCookie = getSettingsFromCookie()
  return settingsCookie.skin || 'default'
}
