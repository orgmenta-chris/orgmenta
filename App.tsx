import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home'
import Sidebar from './components/navigation/sidebar'
import Header from './components/navigation/header'
import User from './pages/user'
import Space from './pages/space'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { ViewQueryerProvider } from './utils/queryer'

export default function App() {
  return (
    <BrowserRouter>
      <ViewQueryerProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Header/>
          <View style={styles.content}>
            <Sidebar/>
            <Routes>
              <Route
                path="/:division/:area/*"
                element={<Home />}
              />
              <Route
                path="/user/:userid"
                element={<User />}
              />
              <Route
                path="/space/:spaceid"
                element={<Space />}
              />
            </Routes>
          </View>
        </View>
      </ViewQueryerProvider>
    </BrowserRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    gap:10
  },
  sidebar: {
    flex: 1,
    flexDirection: 'row',
  },
});

