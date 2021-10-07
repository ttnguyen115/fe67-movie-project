import React from "react";
import { Button, Stack } from "@mui/material";

const SeatRow = ({ seatPerRow }) => {
    return (
        <div>
            <Stack direction="row" spacing={1}>
                {
                    seatPerRow.map(seatItem => (
                        <Button key={seatItem.maGhe}>
                            {seatItem.tenGhe}
                        </Button>
                    ))
                }
            </Stack>
        </div>
    );
};

export default SeatRow;
