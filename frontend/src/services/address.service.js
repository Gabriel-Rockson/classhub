import axios from "axios";

const address_instance = axios.create({
  baseURL:
    "https://global-address.p.rapidapi.com/V3/WEB/GlobalAddress/doGlobalAddress",
  headers: {
    "X-RapidAPI-Host": "global-address.p.rapidapi.com",
    "X-RapidAPI-Key": "aacb4cf585msh54c3d3ca435065ap1dc64cjsn9c32a4957a59",
  },
});

const verifyAddress = async (data) => {
  console.log(data);
  return address_instance.get("", {
    params: {
      ...data,
    },
  });
};

const AddressService = {
  verifyAddress,
};

export default AddressService;
