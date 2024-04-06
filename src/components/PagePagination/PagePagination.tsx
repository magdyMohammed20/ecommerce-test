import { useLocale } from "next-intl";

import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeRtl = createTheme({
  direction: "rtl",
});
const themeLtr = createTheme({
  direction: "ltr",
});

const PagePagination = () => {
  const locale = useLocale();
  return (
    <ThemeProvider theme={locale === "ar" ? themeRtl : themeLtr}>
      <div className="w-full flex justify-center my-6">
        <Pagination
          count={3}
          sx={{
            "& .MuiPaginationItem-icon": {
              backgroundColor: "white",
              color: "#455560",
              width: 48,
              height: 48,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            "& .MuiPaginationItem-root": {
              fontSize: 16,
              backgroundColor: "white",
              color: "#455560",
              width: 48,
              height: 48,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&.Mui-selected": {
                backgroundColor: "#01010C",
                color: "white",
                fontSize: 16,
              },
            },
            "& .MuiSvgIcon-root": {
              width: 20,
              height: 20,
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default PagePagination;
