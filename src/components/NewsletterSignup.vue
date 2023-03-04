<script setup>
    import { ref } from 'vue'
    import useEnv from '../composables/env'

    const { MAILCHIMP_FORM_URL } = useEnv()
</script>

<template>
    <div class="bg-primary py-5">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center px-5">
                <h2>Subscribe to my newsletter</h2>
                <div class="col-12 col-lg-6">
                    <form   
                        class="d-flex flex-column"
                        :action="MAILCHIMP_FORM_URL"
                        method="POST"
                        name="mc-embedded-subscribe-form"
                        target="_blank"
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            class="mb-3 form-control"
                            required
                            name="EMAIL"
                        />
                        <input
                            type="hidden"
                            name="gdpr[65655]"
                            value="Y"
                        >
                        <div class="position-absolute" style="left: -5000px;" aria-hidden="true">
                            <input
                                type="text"
                                name="b_e3390127b80af02d81af7ea96_b60b8c2f22"
                                tabindex="-1"
                                value=""
                            >
                        </div>
                        <button type="submit" class="btn btn-lg btn-secondary mb-3">
                            Subscribe
                        </button>
                        <p class="mb-0">I use Mailchimp as my marketing platform. By clicking to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing.<br><a class="link-light" href="https://mailchimp.com/legal/terms" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>