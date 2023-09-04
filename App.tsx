
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home'
import Sidebar from './components/navigation/sidebar'
import Header from './components/navigation/header'
import User from './pages/user'
import Entity from './pages/entity'
import Space from './pages/space'
import Attribute from './pages/attribute'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import { ViewQueryerProvider } from './utils/queryer'

export default function App() {
  return (
    <BrowserRouter>
      <ViewQueryerProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Header/>
          <View style={styles.content}>

            {/* Navigation */}
            <View style={{flex:1}}>
              <Sidebar/>
            </View>

            <View style={{flex: 4 }}>
              <Routes>

                {/* Home */}
                <Route
                  path="/"
                  element={<Home />}
                />

                {/* Entities */}
                <Route
                  path="entity/"
                  element={<Text>Path "entity/" has no specified entity - this will reroute somewhere (see App.tsx)</Text>}
                />
                <Route
                  path="entity/:entity_id_or_nickname" // 
                  element={<Navigate to="pods" replace />}
                />
                <Route
                  path="entity/:entity_id_or_nickname/:mode/*" // 
                  element={<Entity/>}
                />

                {/* User */}
                <Route
                  path="users/"
                  element={<Navigate to="all" replace />}
                />
                <Route
                  path="users/:userid"
                  element={<User />}
                />
                
                {/* Space */}
                <Route
                  path="spaces/"
                  element={<Navigate to="all" replace />}
                />
                <Route
                  path="/spaces/:spaceid"
                  element={<Space />}
                />
                
                {/* Attributes */}
                <Route
                  path="attributes/"
                  element={<Navigate to="main" replace />}
                />
                <Route
                  path="/attributes/*"
                  // path="/attributes/:mode/:attributeid"
                  element={<Attribute />}
                />

              </Routes>
            </View>
          </View>
        </View>
      </ViewQueryerProvider>
    </BrowserRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: "column",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
});
