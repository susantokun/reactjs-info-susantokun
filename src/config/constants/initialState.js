import srcImgGoogleMaps from "../../assets/images/maps/address.png";

const InitialState = {
  loading: false,
  error: "",

  srcImgGoogleMaps: srcImgGoogleMaps,
  rootPath: "https://admin.susantokun.com/",
  srcPath: "https://admin.susantokun.com/storage/",

  experiences: [],
  experiencesLoading: true,

  configurations: [],
  configurationsLoading: true,

  certificates: [],
  certificatesLoading: true,

  portfolios: [],
  portfoliosLoading: true,

  demos: [],
  demosLoading: true
};

export default InitialState;
