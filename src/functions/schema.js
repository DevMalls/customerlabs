export const filterschemadropdown = (list, selectedlist, value) => {
    let returnvalue = [];
    list.map(item => {
        if (!selectedlist.includes(item.label) && value !== item.label) {
            returnvalue.push(item);
        }
    })
    return returnvalue;
}

export const filterunselecteddropdownschema = (list, selectedlist, value) => {
    let returnvalue = [];
    let filterexceptcurrent = selectedlist.filter(item => item !== value);
    list.map(item => {
        if (!filterexceptcurrent.includes(item.label)) {
            returnvalue.push(item);
        }
    })
    return returnvalue;
}

export const updatedropdown = (addedSchemalist,value) => {
    return addedSchemalist.filter(item => item !== value);
}

export const getSelectedSchema = (list,selectedlist) => {
    let returnvalue = [];
    list.map(item => {
        if (selectedlist.includes(item.label)) {
            returnvalue.push({[item.id]: item.label});
        }
    })
    return returnvalue;
}