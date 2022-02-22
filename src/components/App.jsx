import "../styles/styles.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Settings from "./pages/settings"
import Page404 from "./pages/page404"
//context
import AppearanceProvider from "./context/appearance/AppearanceProvider"
//subpages
import Profile from "./subpages/profile"
import Account from "./subpages/account"
import LinkedDevices from "./subpages/linked-devices"
import Appearance from "./subpages/appearance"
import ChatsSettings from "./subpages/chats-settings"
import Notifications from "./subpages/notifications"
import Privacy from "./subpages/privacy"

const App = () => (
  <AppearanceProvider>
    <BrowserRouter basename="/Proyecto-de-Clon-de-Signal">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="settings/profile" element={<Profile/>}/>
        <Route path="settings/account" element={<Account/>}/>
        <Route path="settings/linked_devices" element={<LinkedDevices/>}/>
        <Route path="settings/appearance" element={<Appearance/>}/>
        <Route path="settings/chats" element={<ChatsSettings/>}/>
        <Route path="settings/notifications" element={<Notifications/>}/>
        <Route path="settings/privacy" element={<Privacy/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  </AppearanceProvider>
)

export default App
