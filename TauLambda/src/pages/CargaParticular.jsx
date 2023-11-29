// Importar React y los componentes necesarios de React Native
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text, Alert, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, MaterialIcons, Fontisto } from '@expo/vector-icons';

// Componente para representar una tarjeta de gasolina
const GasolinaCard = ({ servicio, precio, isSelected, onSelect }) => {
  // Colores correspondientes a los tipos de gasolina
  const coloresGasolina = {
    Diesel: '#0D0D0D',
    Magna: '#038C25',
    Premium: '#D9183B',
  };

  // Color de fondo según el tipo de gasolina
  const colorFondo = coloresGasolina[servicio];

  // Estructura JSX para renderizar la tarjeta de gasolina
  return (
    <TouchableOpacity
      style={[
        styles.card,
        { borderColor: isSelected ? '#FDC32F' : '#ddd' },
        { backgroundColor: colorFondo },
      ]}
      onPress={() => onSelect(servicio)}
    >
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'white' }}>{servicio}</Text>
        <Text style={{ color: 'white' }}>$ {precio}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Componente para representar una tarjeta de método de pago
const PagoCard = ({ tipoPago, isSelected, onSelect }) => {
  // Componente de icono según el tipo de pago
  let iconComponent;

  if (tipoPago === 'Tarjeta de Credito') {
    iconComponent = <FontAwesome name="credit-card" size={24} color="black" />;
  } else if (tipoPago === 'Cashback') {
    iconComponent = <MaterialCommunityIcons name="cash-refund" size={24} color="black" />;
  }

  // Estructura JSX para renderizar la tarjeta de método de pago
  return (
    <TouchableOpacity
      style={[
        styles.card,
        { borderColor: isSelected ? '#FDC32F' : '#ddd' },
        { backgroundColor: 'white' },
      ]}
      onPress={() => onSelect(tipoPago)}
    >
      {iconComponent}
      <Text style={{ textAlign: 'center', paddingTop: 4, }}>{tipoPago}</Text>
    </TouchableOpacity>
  )
}

// Componente principal para la pantalla de Carga Particular
const CargaParticular = ({ navigation }) => {
  // Estados para almacenar monto, litros, tipo de gasolina, método de pago y datos JSON
  const [monto, setMonto] = useState(null);
  const [litros, setLitros] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  // Datos de los servicios de gasolina disponibles
  const servicios = [
    { servicio: 'Magna', precio: '22.49' },
    { servicio: 'Premium', precio: '24.79' },
    { servicio: 'Diesel', precio: '23.99' },
  ];

  // Tipos de pago disponibles
  const tipoPago = [
    { tipo: 'Tarjeta de Credito' },
    { tipo: 'Cashback' },
  ];

  // Función de alerta para el caso de servicio o método de pago no seleccionado
  const alertaServicioPago = () => {
    Alert.alert('Error', 'Debe seleccionar un tipo de gasolina y/o método de pago válidos', [
      { text: 'OK' },
    ]);
  };

  // Función de alerta para el caso de monto o litros no ingresados
  const alertaMontoLitros = () => {
    Alert.alert('Error', 'Debe ingresar un monto o litros válidos', [
      { text: 'OK' },
    ]);
  }

  // Función para construir el objeto JSON con los datos de la transacción
  const construirJSON = () => {
    if (selectedService && selectedPayment) {
      const montoNum = parseFloat(monto);
      const litrosNum = parseFloat(litros);

      if (!isNaN(montoNum) && !isNaN(litrosNum)) {
        const data = {
          Carga: litrosNum.toFixed(2),
          Monto: montoNum.toFixed(2),
          TipoGas: selectedService,
          MetodoPago: selectedPayment,
        };
        setJsonData(data);

      } else {
        alertaMontoLitros();
      }
    } else {
      alertaServicioPago();
    }
  };

  // Función para manejar el evento de continuar
  const handleContinuar = () => {
    construirJSON();
  }

  // Efecto para navegar a las pantallas correspondientes según el tipo de pago seleccionado
  useEffect(() => {
    console.log(`CargaParticular: ${JSON.stringify(jsonData, null, 2)}`);

    if (jsonData !== null) {
      if (selectedPayment === 'Tarjeta de Credito') {
        navigation.navigate('TarjetaCredito', {
          carga: jsonData.Carga,
          monto: jsonData.Monto,
          tipoGas: jsonData.TipoGas,
          metodoPago: jsonData.MetodoPago,
        });
      } else if (selectedPayment === 'Cashback') {
        navigation.navigate('Cashback', {
          carga: jsonData.Carga,
          monto: jsonData.Monto,
          tipoGas: jsonData.TipoGas,
          metodoPago: jsonData.MetodoPago,
        });
      }
    }
  }, [jsonData]);

  // Estructura JSX para renderizar el componente principal
  return (
    <View style={[styles.container]}>
      {/* Encabezado */}
      <View
        style={{
          flex: 0.5,
          padding: 4,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#DE2924',
          borderRadius: 4,
        }}
      >
        <Text style={{ fontSize: 20, color: 'white', }}> Realizar Carga </Text>
      </View>

      {/* Contenido principal */}
      <View
        style={{
          flex: 6,
          padding: 4,
          paddingTop: 8,
        }}
      >
        <Text>Precio por Litro</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {/* Renderizar las tarjetas de gasolina */}
          {servicios.map((infoServicio) => (
            <GasolinaCard
              key={infoServicio.servicio}
              servicio={infoServicio.servicio}
              precio={infoServicio.precio}
              isSelected={selectedService === infoServicio.servicio}
              onSelect={(selectedService) => {
                setSelectedService(selectedService);
                setMonto('');
                setLitros('');
              }}
            />
          ))}
        </View>

        {/* Entradas para monto y litros */}
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'strech',
          }}
        >
          <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25 }}>
            <MaterialIcons name="attach-money" size={20} color="#666" style={{ marginRight: 5, }} />
            <TextInput
              placeholder='Monto'
              style={{ flex: 1 }}
              keyboardType="numeric"
              value={monto}
              onChangeText={(text) => {
                setMonto(text);
                if (text && selectedService) {
                  const precioPorLitro = parseFloat(servicios.find((s) => s.servicio === selectedService).precio);
                  const montoNumeric = parseFloat(text);
                  const litrosCalculados = montoNumeric / precioPorLitro;
                  setLitros(litrosCalculados.toFixed(2));
                }
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8, marginBottom: 25, }}>
            <Fontisto name="blood-drop" size={20} color="#666" style={{ marginRight: 13, }} />
            <TextInput
              placeholder='Litros'
              style={{ flex: 1 }}
              keyboardType="numeric"
              value={litros}
              onChangeText={(text) => {
                setLitros(text);
                if (text && selectedService) {
                  const precioPorLitro = parseFloat(servicios.find((s) => s.servicio === selectedService).precio);
                  const litrosNumeric = parseFloat(text);
                  const montoCalculado = litrosNumeric * precioPorLitro;
                  setMonto(montoCalculado.toFixed(2));
                }
              }}
            />
          </View>
        </View>

        {/* Selección del método de pago */}
        <Text>Metodo de Pago</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {/* Renderizar las tarjetas de método de pago */}
          {tipoPago.map((infoPago) => (
            <PagoCard
              key={infoPago.tipo}
              tipoPago={infoPago.tipo}
              isSelected={selectedPayment === infoPago.tipo}
              onSelect={(selectedPayment) => setSelectedPayment(selectedPayment)}
            />
          ))}
        </View>

        {/* Botón de continuar */}
        <View
          style={{
            flex: 0.5,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              width: 250,
              height: 50,
              borderRadius: 25,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: "#FDC32F",
            }}
            onPress={() => {
              handleContinuar()
            }}
          >
            <Text style={{ fontSize: 20, color: 'white', }}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  card: {
    width: '30%',
    height: '70%',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
  },
});

// Exportar el componente como la exportación predeterminada
export default CargaParticular;
