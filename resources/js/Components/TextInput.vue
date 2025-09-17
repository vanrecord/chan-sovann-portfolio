<template>
    <div>
        <label v-if="label" class="block font-medium text-sm pb-2 text-gray-700 dark:text-light">
            {{ label }}
            <span v-if="required=='required'" class="text-danger pull-right">&nbsp;*</span>
        </label>
        <VanillaInput
            :type="type"
            :placeholder="placeholder"
            :feedback="feedback"
            :errors="error"
            :class="inputClass"
            v-model="value"
            @input="$emit('update:modelValue', $event.target.value)"
            :disabled="disabled"
            :step="step"
            :autocomplete="autocomplete"
            class="focus:ring focus:ring-primary-100 border border-gray-100 shadow-none"
            @blur="$emit('blur',$event.target.value)"
        />
    </div>
</template>
<script>
import { v4 as uuid } from 'uuid'
import { Input as VanillaInput} from '@flavorly/vanilla-components'
export default {
    components : {
        VanillaInput
    },
    props : {
        modelValue : {
            type   : [String, Number],
            default: null
        },
        type       : {
            type   : String,
            default: 'text',
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
        step:{
            default: null
        },
        autocomplete: {
            type    : String,
            default : ''
        }
    },
    emits: ['blur','update:modelValue'],
    data() {
        return {
            value: this.modelValue
        }
    },
    watch: {
        'value': function (value) {
            this.$emit('update:modelValue', value)
        },
        'modelValue': function (value) {
            this.value = value
        }
    },
    
}
</script>
