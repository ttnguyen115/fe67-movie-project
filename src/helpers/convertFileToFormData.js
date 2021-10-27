export const convertFileToFormData = (object) => {
    const formData = new FormData();
    Object.keys(object).forEach((key) => {
        if (key === "File") {
            const dataFile = new Blob([object[key]], {
                type: "image/jpg",
                lastModified: Date.now()
            });
            formData.append(`${key}`, dataFile);
        } else formData.append(`${key}`, `${object[key]}`);
    });

    return formData;
};