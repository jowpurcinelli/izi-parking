import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #1f1f1f;
  padding: 20px 30px 20px;
  justify-content: center;
  align-items: center;
`;

export const VehicleCard = styled.TouchableOpacity`
  width: 100%;
  height: 90px;
  border-radius: 5px;
  background: #2f2f2f;
  padding: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const VehicleAvatarContainer = styled.View`
  width: 70px;
  height: 100%;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const VehicleContent = styled.View`
  height: 100%;
  flex: 1;
  padding-left: 15px;
  justify-content: center;
  align-items: flex-start;
`;

export const VehicleRemoveButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
`;

export const VehicleName = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  color: #fff;
`;

export const VehicleLicensePlate = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 15px;
  color: #7d7d7d;
`;
