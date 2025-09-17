<template>
    <div>
        <RichSelect
        class="w-60"
          v-model="value"
          valueAttribute="key"
          textAttribute="label"
          @update="$emit('update:modelValue', $event.target.value)"
          :options="favoriteCountries"
          :hideSearchBox="true"
          :minimumInputLengthText="''"
        > 
        <template #option="{ option: { raw: country }, className, isSelected }">
            <div class="ml-3 mb-4 mt-4 cursor-pointer">
                <span :class="'fi ' +`fi-${country.value.toLowerCase()}`"></span>
                {{country.label}}
            </div>
        </template>
        <template #label="{ option: { raw: country }, className, isSelected }">
                <span :class="'fi ' +`fi-${country.value.toLowerCase()}`"></span>
        </template>
        </RichSelect>   
    </div>
</template>
<script>
import { CountryInput, RichSelect } from '@flavorly/vanilla-components'
export default {
    components : {
        CountryInput,
        RichSelect,
    },
    props : {
        modelValue : {
            type   : String,
            default: null
        },
        favoriteCountries: {
            type   : Array,
            default: ['GB','KH']
        },
    },
    setup() {
    },
    data() {
        return ({
            value: this.modelValue,
        })
    },
    watch: {
        'value': function (value) {
            this.$emit('update:modelValue', value)
        },
         'modelValue': function (value) {
           
        }
    },
    computed: {
        nameLabel() {
            return ''
        },
    },
    emits: ['update:modelValue'],
    methods: {
    }
    
}
</script>