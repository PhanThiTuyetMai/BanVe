import 'react-native-gesture-handler';
import React, { useReducer, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/TrangChu/Home';
import NhanVien from './components/NhanVien/NhanVien';
import TuyenXe from './components/TuyenXe/TuyenXe';
import NhanVienDetail from './components/NhanVien/NhanVienDetail';
import SuaNhanVien from './components/NhanVien/SuaNhanVien';
import ThemNV from './components/NhanVien/ThemNhanVien';
import MyContext from './configs/MyContext';
import MyUserReducer from './Reducer/MyUserReducer';
import Login from './components/User/login';
import Logout from './components/User/Logout';
import KhachHang from './components/KhachHang/KhachHang';
import KhachHangDetail from './components/KhachHang/KhachHangDetail';
import SuaKhachHang from './components/KhachHang/SuaKhachHang';
import ThemKH from './components/KhachHang/ThemKh';
import TaiXe from './components/TaiXe/TaiXe';
import TaiXeDetail from './components/TaiXe/TaiXeDetails';
import SuaTaiXe from './components/TaiXe/SuaTaiXe';
import ThemTX from './components/TaiXe/ThemTaiXe';
import ChuyenXe from './components/ChuyenXe/ChuyenXe';
import ChuyenXeDetail from './components/ChuyenXe/ChuyenXeDetail';
import DatVe from './components/VeXe/VeXe';
import InfoKhach from './components/VeXe/InfoKhach';
import ThongKe from './components/ThongKe/Thongke';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator()

function DrawerNavigator() {
  const [user, dispatch] = useReducer(MyUserReducer, null);

  return (
    <MyContext.Provider value={[user, dispatch]}>
      <Drawer.Navigator screenOptions={{ headerRight: Logout }}>
        <Drawer.Screen name='Trang Chủ' component={Home} />
        <Drawer.Screen name="Tuyến Xe" component={TuyenXe} />
        <Drawer.Screen name='Chuyến Xe' component={ChuyenXe} />
        <Drawer.Screen name='ChuyenXeDetail' component={ChuyenXeDetail} />
        <Drawer.Screen name='Đặt Vé' component={DatVe} />
        <Drawer.Screen name='Thống Kê' component={ThongKe} />
        {user === null ? (
          <Drawer.Screen name='Login' component={Login} />
        ) : (
          <>
            <Drawer.Screen name={user.username} component={Home} />
            <Drawer.Screen name='Logout' component={Logout} />
          </>
        )}

        {user && user.Loai_NguoiDung === "1" && (
          <>
            <Drawer.Screen name="Nhân Viên" component={NhanVienStackNavigator} />
            <Drawer.Screen name="Khách Hàng" component={KhachHangStackNavigator} />
            <Drawer.Screen name='Tài Xế' component={TaiXeStackNavigator} />
          </>
        )}
      </Drawer.Navigator>
    </MyContext.Provider>
  );
}

function NhanVienStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Nhân Viên - Danh Sách" component={NhanVien} />
      <Stack.Screen name='Thêm Nhân Viên' component={ThemNV} />
      <Stack.Screen name="NhanVienDetail" component={NhanVienDetail} options={{ headerShown: false }} />
      <Stack.Screen name="SuaNhanVien" component={SuaNhanVien} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function KhachHangStackNavigator () {
  return (
    <Stack.Navigator>
      <Drawer.Screen name="Khách Hàng - Danh Sách" component={KhachHang} />
      <Drawer.Screen name="KhachHangDetail" component={KhachHangDetail}/>
      <Drawer.Screen name="SuaKhachHang" component={SuaKhachHang} options={{ headerShown: false }} />
      <Drawer.Screen name="Thêm Khách Hàng" component={ThemKH} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function TaiXeStackNavigator () {
  return (
    <Stack.Navigator>
      <Drawer.Screen name='Tài Xế - Danh Sách' component={TaiXe} />
      <Drawer.Screen name="TaiXeDetail" component={TaiXeDetail}/>
      <Drawer.Screen name="SuaTaiXe" component={SuaTaiXe} options={{ headerShown: false }} />
      <Drawer.Screen name='ThemTaiXe' component={ThemTX} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Tuyến Xe"
        component={TuyenXe}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bus" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
