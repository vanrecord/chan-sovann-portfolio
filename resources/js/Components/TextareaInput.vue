<template>
    <div>
        <label v-if="label" class="block font-medium text-sm pb-2 text-gray-700 dark:text-light">
            {{ label }}
            <span v-if="required=='required'" class="text-danger pull-right">&nbsp;*</span>
        </label>
        <VanillaTextArea
            :placeholder="placeholder"
            :feedback="feedback"
            :errors="error"
            :class="inputClass"
            v-model="value"
            @input="$emit('update:modelValue', $event.target.value)"
            :disabled="disabled"
            class="focus:ring focus:ring-primary-100 border border-gray-100 shadow-none"
            :autosize="autosize"
        />
    </div>
</template>
<script>
import { v4 as uuid } from 'uuid'
import { Textarea as VanillaTextArea} from '@flavorly/vanilla-components'
export default {
    components : {
        VanillaTextArea
    },
    props : {
        modelValue : {
            type   : String,
            default: null
        },
        label      : {
            type   : String,
            default: null
        },
        required   : {
            type   : String,
            default: ''
        },
        placeholder: {
            type   : String,
            default: ''
        },
        feedback   : {
            type   : String,
            default: ''
        },
        error      : {
            type   : String,
            default: null,
        },
        inputClass : {
            type   : String,
            default: ''
        },
        disabled   : {
            type   : Boolean,
            default: false,
        },
        autosize   : {
            type   : Boolean,
            default: false
        }
    },
    data() {
        return {
            value: this.modelValue
        }
    },
    
}
</script>
