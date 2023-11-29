<script lang="ts">
    const currentTime = new Date()
    const currebtHour = currentTime.getHours()

    let greeting = ""

    if(currebtHour < 12) {
        greeting = "Buenos días"
    } else if (currebtHour < 18) {
        greeting = "Buenas tardes"
    } else {
        greeting = "Buenas noches"
    }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>