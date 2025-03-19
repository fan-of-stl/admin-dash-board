import { Grid2, Paper, Box } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import AText from "../atoms/AText";
import AIcon from "../atoms/AIcon";

const StatsCard = ({ width, title, value, icon, description, color = "primary" }) => {
  return (
    <Paper
      elevation={3}
      sx={{ p: 2, borderRadius: 2, display: "flex", flexDirection: "column", gap: 2, width: width }}
    >
      <Box
        sx={{
          display: "flex",
          aligns: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            backgroundColor: color,
            display: "flex",
            aligns: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <AIcon name={icon} sx={{ fontSize: 30, color: "white" }} />
        </Box>
        <AText variant="h6" sx={{ wordWrap: "break-word", fontWeight: "bold" }}>{title}</AText>
      </Box>

      <Grid2 container spacing={1} flex={1}>
        <Grid2 size={{ xs: 12 }} sx={{ display: "flex", aligns: "center", gap: 1 }}>
          <AText variant="subtitle2" color="textSecondary">Value:</AText>
          <AText variant="h5" fontWeight="bold" sx={{ wordWrap: "break-word" }}>
            {value}
          </AText>
        </Grid2>
        {description && (
          <Grid2 size={{ xs: 12 }} sx={{ maxHeight: 100, overflowY: 'auto', textAlign: 'left' }}>
            <AText variant="subtitle2" color="textSecondary">Description:</AText>
            <AText variant="body2" color="gray" sx={{ wordWrap: "break-word" }}>
              {description}
            </AText>
          </Grid2>
        )}
      </Grid2>
    </Paper>
  );
};

StatsCard.propTypes = {
  width: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]).isRequired,
  description: PropTypes.string,
  color: PropTypes.string,
};

export default StatsCard;