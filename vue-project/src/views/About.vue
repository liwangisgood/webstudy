<template>
    <div>
        <h3>go About</h3>
        <ul>
            <li> <router-link to="/about/aboutChildOne">chindOne </router-link>
            </li>
            <li> <router-link to="/about/aboutChildTwo">chindTwo</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>