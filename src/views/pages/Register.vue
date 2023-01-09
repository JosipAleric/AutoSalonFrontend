<template>
  <div class="form-demo">
    <Dialog
      v-model:visible="showMessage"
      :breakpoints="{ '960px': '80vw' }"
      :style="{ width: '30vw' }"
      position="top"
    >
      <div class="flex align-items-center flex-column pt-6 px-3">
        <i
          class="pi pi-check-circle"
          :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
        ></i>
        <h5>Registration Successful!</h5>
        <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
          Your account is registered under name <b>{{ name }}</b> ; it'll be
          valid next 30 days without activation. Please check
          <b>{{ email }}</b> for activation instructions.
        </p>
      </div>
      <template #footer>
        <div class="flex justify-content-center">
          <Button label="OK" @click="toggleDialog" class="p-button-text" />
        </div>
      </template>
    </Dialog>
    <div
      class="
        surface-ground
        flex
        align-items-center
        justify-content-center
        min-h-screen min-w-screen
        overflow-hidden
      "
    >
      <div
        class="
          flex flex-column
          align-items-center
          justify-content-center
          px-2
          md:px-0
        "
      >
        <img
          src="/layout/images/logo.png"
          alt="logo"
          class="mb-5 w-6rem flex-shrink-0"
        />
        <div
          style="
            border-radius: 56px;
            padding: 0.3rem;
            background: linear-gradient(
              180deg,
              var(--primary-color) 10%,
              rgba(33, 150, 243, 0) 30%
            );
          "
        >
          <div
            class="w-full surface-card py-8 px-8"
            style="border-radius: 53px"
          >
            <div class="text-center mb-5">
              <div class="text-900 text-3xl font-medium mb-3">Welcome!</div>
              <span class="text-600 font-medium">Register for free now!</span>
            </div>

            <h5 class="text-center">Register</h5>
            <form
              @submit.prevent="handleSubmit(!v$.$invalid)"
              class="p-fluid md:w-30rem"
            >
              <div class="field">
                <div class="p-float-label mt-5 p-input-icon-right">
                  <i class="pi pi-user" />
                  <InputText
                    id="name"
                    v-model="v$.name.$model"
                    :class="{ 'p-invalid': v$.name.$invalid && submitted }"
                  />
                  <label
                    for="name"
                    :class="{ 'p-error': v$.name.$invalid && submitted }"
                    >First Name*</label
                  >
                </div>
                <small
                  v-if="
                    (v$.name.$invalid && submitted) ||
                    v$.name.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.name.required.$message.replace("Value", "First Name")
                  }}</small
                >
              </div>

              <div class="field">
                <div class="p-float-label mt-5">
                  <InputText
                    id="surname"
                    v-model="v$.surname.$model"
                    :class="{ 'p-invalid': v$.surname.$invalid && submitted }"
                  />
                  <label
                    for="surname"
                    :class="{ 'p-error': v$.surname.$invalid && submitted }"
                    >Last Name*</label
                  >
                </div>
                <small
                  v-if="
                    (v$.surname.$invalid && submitted) ||
                    v$.surname.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.surname.required.$message.replace("Value", "Last Name")
                  }}</small
                >
              </div>

              <div class="field">
                <div class="p-float-label mt-4 p-input-icon-right">
                  <i class="pi pi-at" />
                  <InputText
                    id="username"
                    v-model="v$.username.$model"
                    :class="{ 'p-invalid': v$.username.$invalid && submitted }"
                  />
                  <label
                    for="username"
                    :class="{ 'p-error': v$.username.$invalid && submitted }"
                    >Username*</label
                  >
                </div>
                <small
                  v-if="
                    (v$.username.$invalid && submitted) ||
                    v$.username.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.username.required.$message.replace("Value", "Username")
                  }}</small
                >
              </div>

              <div class="field">
                <div class="p-float-label p-input-icon-right mt-4">
                  <i class="pi pi-envelope" />
                  <InputText
                    id="email"
                    v-model="v$.email.$model"
                    :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                    aria-describedby="email-error"
                  />
                  <label
                    for="email"
                    :class="{ 'p-error': v$.email.$invalid && submitted }"
                    >Email*</label
                  >
                </div>
                <span v-if="v$.email.$error && submitted">
                  <span
                    id="email-error"
                    v-for="(error, index) of v$.email.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
                <small
                  v-else-if="
                    (v$.email.$invalid && submitted) ||
                    v$.email.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.email.required.$message.replace("Value", "Email")
                  }}</small
                >
              </div>
              <div class="field">
                <div class="p-float-label mt-4">
                  <Password
                    id="password"
                    v-model="v$.password.$model"
                    :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                    toggleMask
                  >
                    <template #header>
                      <h6>Pick a password</h6>
                    </template>
                    <template #footer="sp">
                      {{ sp.level }}
                      <Divider />
                      <p class="mt-2">Suggestions</p>
                      <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                        <li>At least one lowercase</li>
                        <li>At least one uppercase</li>
                        <li>At least one numeric</li>
                        <li>Minimum 8 characters</li>
                      </ul>
                    </template>
                  </Password>
                  <label
                    for="password"
                    :class="{ 'p-error': v$.password.$invalid && submitted }"
                    >Password*</label
                  >
                </div>
                <small
                  v-if="
                    (v$.password.$invalid && submitted) ||
                    v$.password.$pending.$response
                  "
                  class="p-error"
                  >{{
                    v$.password.required.$message.replace("Value", "Password")
                  }}</small
                >
              </div>
              <div class="field">
                <div class="p-float-label mt-4">
                  <Calendar id="date" v-model="date" :showIcon="true" />
                  <label for="date">Birthday</label>
                </div>
              </div>
              <div class="field-checkbox">
                <Checkbox
                  id="accept"
                  name="accept"
                  value="Accept"
                  v-model="v$.accept.$model"
                  :class="{ 'p-invalid': v$.accept.$invalid && submitted }"
                />
                <label
                  for="accept"
                  :class="{ 'p-error': v$.accept.$invalid && submitted }"
                  >I agree to the terms and conditions*</label
                >
              </div>
              <Button type="submit" label="Register" class="mt-2" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: null,
      submitted: false,
      countries: null,
      showMessage: false,
    };
  },
  validations() {
    return {
      name: {
        required,
      },
      surname: {
        required,
      },
      username: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
      accept: {
        required,
      },
    };
  },

  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;

      if (!isFormValid) {
        return;
      }

      this.toggleDialog();
    },
    toggleDialog() {
      this.showMessage = !this.showMessage;

      if (!this.showMessage) {
        this.resetForm();
      }
    },
    resetForm() {
      this.name = "";
      this.surname = "";
      this.username = "";
      this.email = "";
      this.password = "";
      this.date = null;
      this.accept = null;
      this.submitted = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-demo {
  .card {
    min-width: 450px;

    form {
      margin-top: 2rem;
    }

    .field {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    .card {
      width: 80%;
    }
  }
}

.pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

.pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>

