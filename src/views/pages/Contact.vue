<script setup></script>

<template>
  <div class="block-section">
    <div class="block-content">
      <div class="">
        <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
          <div class="grid">
            <div
              class="col-12 md:col-6 bg-no-repeat bg-cover p-8"
              style="background-image: url('/demo/images/contact/contact.jpg')"
            >
              <div class="text-white text-2xl font-medium mb-6">Contact Us</div>
              <div class="text-gray-300 line-height-3 mb-6">
                We are here to provide you with more information, answer any
                questions you may have and create an effective solution for your
                needs!
              </div>
              <a
                class="
                  inline-flex
                  align-items-center
                  text-blue-300
                  font-bold
                  no-underline
                  cursor-pointer
                "
                ><span class="mr-3">View Address on Google Maps</span
                ><i class="pi pi-arrow-right"></i
              ></a>
              <ul class="list-none p-0 m-0 mt-6 text-white">
                <li class="flex align-items-center mb-3">
                  <i class="pi pi-phone mr-2"></i><span>+123456789</span>
                </li>
                <li class="flex align-items-center mb-3">
                  <i class="pi pi-twitter mr-2"></i><span>@AutoSalon</span>
                </li>
                <li class="flex align-items-center">
                  <i class="pi pi-inbox mr-2"></i
                  ><span>support@autosalon.com</span>
                </li>
              </ul>
            </div>
            <div class="col-12 md:col-6">
              <div class="p-fluid formgrid grid px-4 py-8 md:px-6 lg:px-8">
                <div class="field col-12 lg:col-6 mb-4">
                  <input
                    class="p-inputtext p-component py-3 px-2 text-lg"
                    id="firstname"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div class="field col-12 lg:col-6 mb-4">
                  <input
                    class="p-inputtext p-component py-3 px-2 text-lg"
                    id="lastname"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div class="field col-12 mb-4">
                  <input
                    class="p-inputtext p-component py-3 px-2 text-lg"
                    id="email"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div class="field col-12 mb-4">
                  <input
                    class="p-inputtext p-component py-3 px-2 text-lg"
                    id="phone"
                    type="text"
                    placeholder="Phone"
                  />
                </div>
                <div class="field col-12 mb-4">
                  <Textarea
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
                    rows="3"
                    placeholder="Message"
                    style="height: calc(106px); overflow: hidden"
                  ></Textarea>
                </div>
                <div class="col-12 text-right">
                  <button
                    class="p-button p-component px-5 py-3 w-auto"
                    type="button"
                    aria-label="Submit"
                  >
                    <span
                      class="pi pi-envelope p-button-icon p-button-icon-left"
                    ></span
                    ><span class="p-button-label">Submit</span
                    ><span class="p-ink" role="presentation"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>