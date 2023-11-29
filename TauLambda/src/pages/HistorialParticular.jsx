// Importaciones de React y React Native
import { FlatList, StyleSheet, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { readHistoryByUserId } from '../services/historyService';

// Componente para representar una tarjeta de tipo de gasolina
const GasolinaCard = ({ servicio }) => {
  // Colores asociados a cada tipo de gasolina
  const coloresGasolina = {
    Diesel: '#0D0D0D',
    Magna: '#038C25',
    Premium: '#D9183B',
  };

  // Obtener el color correspondiente al tipo de gasolina
  const colorFondo = coloresGasolina[servicio];

  return (
    <View style={[styles.gasolina, { backgroundColor: colorFondo }]}>
      <Text style={{ fontSize: 12, color: 'white', fontWeight: 600 }}>{servicio}</Text>
    </View>
  );
};

// Componente para representar un elemento de la lista de historial
const ListItem = ({ item }) => {
  // Color de texto basado en el estado de la transacción
  const textColor = item.Estatus === 'Completado' ? 'green' : '#666';

  // Formatear la fecha de transacción
  const fechaTransaccion = new Date(item.FechaTransaccion);
  const formattedFechaTransaccion = `${fechaTransaccion.getFullYear()}-${(fechaTransaccion.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${fechaTransaccion
    .getDate()
    .toString()
    .padStart(2, '0')} ${fechaTransaccion
    .getHours()
    .toString()
    .padStart(2, '0')}:${fechaTransaccion
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${fechaTransaccion.getSeconds().toString().padStart(2, '0')}`;

  return (
    <View style={styles.card}>
      <View style={{ height: 80, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Tarjeta de tipo de gasolina */}
        <View style={{ width: '20%', alignItems: 'center' }}>
          <GasolinaCard
            key={item.id}
            servicio={item.TipoGas}
          />
        </View>

        {/* Detalles de la transacción */}
        <View style={{ width: '50%', height: '100%', paddingLeft: 5, paddingTop: 6 }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>{item.Carga} Litros</Text>
          <Text style={{ fontSize: 14 }}>Pago: {item.MetodoPago}</Text>
          <Text style={{ fontSize: 14, color: '#666' }}>{formattedFechaTransaccion}</Text>
        </View>

        {/* Monto y estado de la transacción */}
        <View style={{ width: '30%', height: '100%', paddingRight: 5, paddingTop: 6, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>${item.Monto}</Text>
          <Text style={{ fontSize: 14, color: textColor, paddingTop: 8 }}>{item.Estatus}</Text>
        </View>
      </View>
    </View>
  );
}

// Pantalla de historial particular
const HistorialParticular = ({ navigation }) => {
  // Estado local para el cashback
  const [cashback, setCashback] = React.useState(300.59);

  // Estado local para los datos del historial
  const [historyData, setHistoryData] = useState([]);

  // ID del usuario
  const userId = 5;

  // Función para obtener y actualizar los datos del historial
  const fetchData = async () => {
    try {
      readHistoryByUserId(userId).then((data) => {
        setHistoryData(data);
      });
    } catch (error) {
      console.error('Error al obtener historial:', error);
    }
  };

  // Efecto secundario para cargar datos al montar el componente
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={{ fontSize: 20, color: 'white' }}> Historial </Text>
      </View>

      {/* Sección de cashback */}
      <View style={styles.cashback}>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 14 }}>Cashback Almacenado</Text>
          <Text style={{ fontSize: 45, fontWeight: '600' }}>{`$${cashback}`}</Text>
        </View>
        <Ionicons name="cash-outline" size={60} color="#666" style={{}} />
      </View>

      {/* Lista de transacciones */}
      <View style={{ flex: 4 }}>
        <FlatList
          data={historyData}
          keyExtractor={(item) => item.ID_historial.toString()}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    </View>
  )
}

export default HistorialParticular;

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  header: {
    flex: 0.5,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DE2924',
    borderRadius: 4,
  },
  cashback: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 5,
    padding: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  gasolina: {
    width: 60,
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
})
