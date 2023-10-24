import { validateRequired, validateRequiredNumberField, validateRequiredArrayField } from '../validation'

export const validationMixin = {
    methods: {
        validateForm() {
            const errors = {}

            if (!validateRequired(this.title)) {
                errors.title = 'Főcím mező kitöltése kötelező'
            }

            if (!validateRequiredArrayField(this.genres)) {
                errors.genres = 'Műfajok mező kitöltése kötelező'
            }

            if (!validateRequiredArrayField(this.directors)) {
                errors.directors = 'Rendezők megadása kötelező'
            }

            if (!validateRequiredArrayField(this.actors)) {
                errors.actors = 'Színészek megadása kötelező'
            }

            if (!validateRequired(this.selectedDate)) {
                errors.releaseDate = 'Megjelenés dátum megadása kötelező'
            }

            if (!validateRequiredNumberField(this.movieLength)) {
                errors.movieLength = 'Film hossz megadása kötelező'
            }

            if (!validateRequiredNumberField(this.age)) {
                errors.age = 'Korhatár megadása kötelező'
            }

            if (!validateRequired(this.description)) {
                errors.description = 'Leírás mező kitöltése kötelező'
            }

            if (!validateRequired(this.description)) {
                errors.description = 'Leírás mező kitöltése kötelező'
            }

            if (!validateRequired(this.fileSelected)) {
                errors.fileSelected = 'Borítókép megadása kötelező'
            }

            return errors
        }
    }
}