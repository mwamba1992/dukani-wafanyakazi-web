import{a6 as i,d as c,f as l,b as e,e as a,h as r,t as n,i as d,o as m}from"./index-D4L3I7ET.js";import{R as p}from"./rotate-cw-BlTW2KwT.js";/**
 * @license lucide-vue-next v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=i("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),h={class:"flex flex-col items-center px-6 py-10 text-center",role:"alert"},f={class:"mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-bad-soft text-bad"},x={class:"max-w-sm text-sm text-muted"},g=c({__name:"ErrorState",props:{message:{}},emits:["retry"],setup(o){return(t,s)=>(m(),l("div",h,[e("div",f,[a(r(u),{class:"h-6 w-6","aria-hidden":"true"})]),e("p",x,n(o.message),1),e("button",{class:"btn btn-outline btn-sm mt-4",onClick:s[0]||(s[0]=b=>t.$emit("retry"))},[a(r(p),{class:"h-4 w-4","aria-hidden":"true"}),d(n(t.$t("Try again")),1)])]))}});export{g as _};
