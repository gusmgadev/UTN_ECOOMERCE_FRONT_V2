export const extractFormData = (form_fields,form_values) => {
    for (let campo in form_fields) {
        form_fields[campo] = form_values.get(campo)
    }
    return form_fields

}
