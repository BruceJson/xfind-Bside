<template>
    <div class="hello">
        <h1>hello world</h1>
        <div class='test1'>111
            <div class='test2' length='100'>222</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
    color: var(--mainColor);
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

/*a {
    color: var(--mainColor);
}*/

</style>
