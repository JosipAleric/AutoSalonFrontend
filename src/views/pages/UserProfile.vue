<script setup>
import { useLayout } from "@/layout/composables/layout";
const { layoutConfig } = useLayout();

const firstName = "John";
const lastName = "Doe";
const username = "johndoe3";
const email = "johndoe8@gmail.com";
const password = "johndoe123";
</script>

<template>
  <div class="grid flex align-items-center justify-content-center">
    <div class="col-12 lg:w-11 xl:w-7">
      <div class="surface-section mx-5">
        <div class="font-medium text-3xl text-900 mb-3">
          Profile Information
        </div>
        <div class="text-500 text-xl mb-5">
          All of your profile informations at one place.
        </div>

        <div class="flex justify-content-center">
          <div
            class="
              border-circle
              w-9rem
              h-9rem
              m-2
              mb-5
              flex
              align-items-center
              justify-content-center
              relative
            "
            style="
              background-image: url('/demo/images/avatar/person.jpg');
              background-size: cover;
              background-position: center;
            "
          >
            <Button
              type="button"
              class="
                p-button-primary p-button-rounded
                absolute
                bottom-0
                right-0
              "
              icon="pi pi-camera"
              ><FileUpload
                mode="basic"
                name="demo[]"
                url="./upload.php"
                accept="image/*"
                :maxFileSize="1000000"
            /></Button>
          </div>
        </div>

        <div>
          <div class="grid">
            <div class="col-12 md:col-6">
              <h5>First Name</h5>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-user"></i>
                </span>
                <InputText v-model="firstName" :disabled="disabled" />
              </div>
            </div>

            <div class="col-12 md:col-6">
              <h5>Last Name</h5>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-user"></i>
                </span>
                <InputText v-model="lastName" :disabled="disabled" />
              </div>
            </div>

            <div class="col-12">
              <h5>Username</h5>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-at"></i>
                </span>
                <InputText v-model="username" :disabled="disabled" />
              </div>
            </div>

            <div class="col-12">
              <h5>Email</h5>
              <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                  <i class="pi pi-envelope"></i>
                </span>
                <InputText v-model="email" :disabled="disabled" />
              </div>
            </div>

            <div class="col-12">
              <h5>Password</h5>
              <div class="p-inputgroup">
                <Password v-model="password" toogleMask :disabled="disabled" />
              </div>
            </div>

            <div class="col-12">
              <h5>Birthday</h5>
              <div class="p-inputgroup">
                <Calendar
                  :showIcon="true"
                  :showButtonBar="true"
                  :disabled="disabled"
                ></Calendar>
              </div>
              <Button
                @click="this.disabled = !this.disabled"
                class="p-button-rounded px-4 mt-4"
                >{{ this.disabled === true ? "Edit" : "Save" }}</Button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="block-section">
    <div class="block-content">
      <div class="">
        <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
          <div class="grid">
            <div class="col-12 md:col-6">
              <div class="p-fluid pr-0 md:pr-6">
                <div class="field">
                  <label for="name" class="font-medium">Name</label
                  ><input
                    class="p-inputtext p-component py-3 px-2 text-lg"
                    id="name"
                    type="text"
                  />
                </div>
                <div class="field">
                  <label for="email" class="font-medium">Email</label
                  ><input
                    class="p-inputtext p-component py-3 px-2 text-lg"
                    id="email"
                    type="text"
                  />
                </div>
                <div class="field">
                  <label for="company" class="font-medium">Company</label
                  ><input
                    class="p-inputtext p-component py-3 px-2 text-lg"
                    id="company"
                    type="text"
                  />
                </div>
                <div class="field">
                  <label for="message" class="font-medium">Message</label
                  ><textarea
                    class="
                      p-inputtextarea
                      p-inputtext
                      p-component
                      p-inputtextarea-resizable
                      py-3
                      px-2
                      text-lg
                    "
                    id="message"
                    rows="6"
                    style="height: calc(178px); overflow: hidden"
                  ></textarea>
                </div>
                <button
                  class="p-button p-component w-auto"
                  type="button"
                  aria-label="Send Message"
                >
                  <!----><span
                    class="pi pi-send p-button-icon p-button-icon-left"
                  ></span
                  ><span class="p-button-label">Send Message</span
                  ><!----><span class="p-ink" role="presentation"></span>
                </button>
              </div>
            </div>
            <div
              class="col-12 md:col-6 bg-no-repeat bg-right-bottom"
              style="
                background-image: url('images/blocks/contact/contact-1.png');
              "
            >
              <div class="text-900 text-2xl font-medium mb-6">Contact Us</div>
              <div class="text-700 line-height-3 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <a
                class="
                  inline-flex
                  align-items-center
                  text-blue-600
                  font-bold
                  no-underline
                  cursor-pointer
                "
                ><span class="mr-3">View Address on Google Maps</span
                ><i class="pi pi-arrow-right"></i
              ></a>
              <ul class="list-none p-0 m-0 mt-6 text-700">
                <li class="flex align-items-center mb-3">
                  <i class="pi pi-phone mr-2"></i><span>+123456789</span>
                </li>
                <li class="flex align-items-center mb-3">
                  <i class="pi pi-twitter mr-2"></i><span>@prime_ng</span>
                </li>
                <li class="flex align-items-center">
                  <i class="pi pi-inbox mr-2"></i
                  ><span>contact@primetek.com.tr</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: true,
    };
  },

  methods: {},
};
</script>