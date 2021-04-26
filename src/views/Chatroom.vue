<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewCharForm />
  </div>
</template>

<script>
import { watch } from "vue";
import Navbar from "../components/Navbar";
import NewCharForm from "../components/NewChatForm";
import ChatWindow from "../components/ChatWindow";

import getUser from "../composables/getUser";
import { useRouter } from "vue-router";

export default {
  components: { Navbar, NewCharForm, ChatWindow },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
