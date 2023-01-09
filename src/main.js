import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';


//Theme and icons
import 'primevue/resources/themes/lara-light-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

//PrimeVue Components
import Button from 'primevue/button';
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Checkbox from 'primevue/checkbox';
import StyleClass from 'primevue/styleclass';
import Calendar from 'primevue/calendar';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Dropdown from 'primevue/dropdown';
import DataView from 'primevue/dataview';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import FileUpload from 'primevue/fileupload';
import Menu from 'primevue/menu';


import '@/assets/styles.scss';
const app = createApp(App)
app.use(PrimeVue, { ripple: true});
app.use(router)
app.use(ToastService);

//Use components
app.component('Button', Button)
app.component('Card', Card)
app.component('Chip', Chip)
app.component('InputText', InputText)
app.component('Password', Password)
app.component('Checkbox', Checkbox)
app.component('Calendar', Calendar)
app.component('Dialog', Dialog)
app.component('Divider', Divider)
app.component('Dropdown', Dropdown)
app.component('DataView', DataView)
app.component('Toast', Toast)
app.component('FileUpload', FileUpload)
app.component('Menu', Menu)

//Use directives
app.directive('styleclass', StyleClass);

app.mount('#app')
