import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import ProductsList from './components/ProductsList';
export default function App() {
  const {colorScheme,toggleColorScheme} =useColorScheme()
  return (
    <View className="pt-8 flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <View className='flex-row w-fullgap-5' >
        <Text className='dark:text-white text-2xl font-bold'>
          New collection
        </Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
      <ProductsList />
      {/* Статус бар это вемя уровень заряда верхняя панель */}
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </View>
  );
}

