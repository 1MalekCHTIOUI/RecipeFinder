import { useState, useEffect } from "react";
import * as Location from "expo-location";
import axios from "axios";
import { PSTACK_API_KEY } from "@env";
const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLocation = async (lat, long) => {
    const params = {
      access_key: PSTACK_API_KEY,
      query: `${lat},${long}`,
    };

    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://api.positionstack.com/v1/reverse",
        { params },
      );
      setLocation(response.data.data[2]);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setErrorMsg(error);
    } finally {
      setIsLoading(false);
    }
  };
  const getPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      setIsLoading(false);
      return;
    }

    let coords = await Location.getCurrentPositionAsync({});
    setCoordinates(coords);
  };
  useEffect(() => {
    setIsLoading(true);
    getPermission();
  }, []);

  useEffect(() => {
    coordinates &&
      fetchLocation(coordinates.coords.latitude, coordinates.coords.longitude);
  }, [coordinates]);

  return { location, errorMsg, isLoading };
};

export default useLocation;
