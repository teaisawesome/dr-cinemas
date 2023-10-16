import { validateRequired, validateRequiredArrayField } from '../validation'

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
                errors.directors = 'Rendező(k) megadása kötelező'
            }

            return errors
        }
    }
}