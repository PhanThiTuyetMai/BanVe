import { Text } from 'react-native';
import { LineChart, BarChart, PieChart, Dimensions } from 'react-native-chart-kit';

const ThongKe = () => {
    return (
        // <Text>Thống Kê</Text>
        <BarChart
            data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    data: [20, 45, 28, 80, 99, 43]
                }]
            }}
            width={402} // Chiều rộng của biểu đồ, lấy chiều rộng của cửa sổ trừ đi một số padding
            height={220} // Chiều cao của biểu đồ
            yAxisLabel={'$'} // Nhãn trục y
            chartConfig={{
                backgroundColor: '#e26a00', // Màu nền của biểu đồ
                backgroundGradientFrom: '#fb8c00', // Màu gradient từ
                backgroundGradientTo: '#ffa726', // Màu gradient đến
                decimalPlaces: 2, // Số chữ số sau dấu thập phân
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Màu của dữ liệu
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Màu của nhãn
                style: {
                    borderRadius: 16 // Bo góc của biểu đồ
                },
                propsForDots: {
                    r: "6", // Đường kính của các chấm trên biểu đồ
                    strokeWidth: "2", // Độ dày của đường viền của chấm
                    stroke: "#ffa726" // Màu viền của chấm
                }
            }}
            style={{
                marginVertical: 8, // Khoảng cách giữa biểu đồ và các phần tử khác
                borderRadius: 16 // Bo góc của biểu đồ
            }}
        />
    );
};

export default ThongKe;