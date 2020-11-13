const GridStyles = {
    setRow: (start, end = start) => {
        return {
            gridRow: `${start} / ${end}`
        }
    },
    setCol: (start, end = start) => {
        return {
            gridColumn: `${start} / ${end}`
        }
    },
    setRowCol(row, col) {
        return {
            ...this.setCol(col),
            ...this.setRow(row)
        };
    },
    define(rows = "auto", cols = "auto") {
        return {
            display: "grid",
            gridTemplateRows: rows,
            gridTemplateColumns: cols
        }
    }
};

export default GridStyles
