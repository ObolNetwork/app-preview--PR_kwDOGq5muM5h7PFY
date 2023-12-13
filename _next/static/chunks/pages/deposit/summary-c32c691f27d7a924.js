(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{1619:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deposit/summary",function(){return s(97902)}])},97902:function(e,t,s){"use strict";s.r(t);var n=s(85893),a=s(71866),i=s(8478),r=s(3441),o=s(11163),c=s(67294),l=s(41518),d=s(87536),h=s(11771);let u=()=>{let e=(0,l.o)(e=>Object.keys(e.depositData).length),{control:t,formState:{isDirty:s,isValid:u},handleSubmit:x}=(0,d.cI)({defaultValues:{checkboxesStatus:[!1,!1,!1,!1,!1]}}),p=(0,o.useRouter)(),m=(0,l.o)((0,c.useCallback)(e=>e.completeDepositStep,[])),g=(0,l.o)(e=>e.enableDepositStep),j=()=>{m("summary");let e=g("deposit-transaction");p.push(e.href)},k=e*r.lc,b="mainnet"===r.pn?"ETH":"Testnet ETH";return(0,n.jsxs)(i.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,n.jsx)(i.xv,{variant:"h3",children:"Summary"}),(0,n.jsxs)(i.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,n.jsx)(i.kC,{direction:"column",css:{gap:"$xs"},children:(0,n.jsx)(i.xv,{variant:"h4",children:"Launchpad Summary"})}),(0,n.jsxs)(i.kC,{direction:{"@sm":"column"},css:{gap:"$xl",width:"auto"},children:[(0,n.jsxs)(i.kC,{direction:"column",css:{gap:"$xs"},children:[(0,n.jsx)(i.xv,{css:{textTransform:"uppercase"},variant:"subline",color:"body",children:"VALIDATORS"}),(0,n.jsx)(i.nv,{value:e,disabled:!0})]}),(0,n.jsxs)(i.kC,{direction:"column",css:{gap:"$xs"},children:[(0,n.jsx)(i.xv,{css:{textTransform:"uppercase"},variant:"subline",color:"body",children:"TOTAL AMOUNT REQUIRED"}),(0,n.jsxs)(i.kC,{css:{gap:"$xxs",height:"100%",alignItems:"center"},children:[(0,n.jsx)(i.Ee,{src:"/assets/eth-icon.png",alt:"eth",width:24,height:24}),(0,n.jsxs)(i.xv,{variant:"h5",children:["".concat(k," ").concat(b)," "]})]})]})]})]}),(0,n.jsx)(a.l0,{onSubmit:x(j),children:(0,n.jsxs)(i.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,n.jsxs)(i.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,n.jsx)(i.kC,{direction:"column",css:{gap:"$xs"},children:(0,n.jsx)(i.xv,{variant:"h4",children:"Understand the Risks"})}),(0,n.jsxs)(i.kC,{direction:"column",css:{gap:"$xl",width:"auto"},children:[(0,n.jsx)(h.YG,{control:t,text:"I understand that I will not be able to withdraw my funds if more than the tolerated amount of operators lose their validator private key shares",name:"checkboxesStatus.0"}),(0,n.jsx)(h.YG,{control:t,text:"I understand that there are early adopter and slashing risks.",name:"checkboxesStatus.1"}),(0,n.jsx)(h.YG,{control:t,text:"I understand that this transaction is not reversible.",name:"checkboxesStatus.2"})]})]}),(0,n.jsxs)(i.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,n.jsx)(i.kC,{direction:"column",css:{gap:"$xs"},children:(0,n.jsx)(i.xv,{variant:"h4",children:"Make Sure You Aren’t Being Phished"})}),(0,n.jsxs)(i.kC,{direction:"column",css:{gap:"$xl",width:"auto"},children:[(0,n.jsx)(i.sQ,{heading:"You are responsible for the transaction. Fraudulent websites might try and lure you into sending the 32 ETH to them, instead of the official deposit contract. Make sure that the address you are sending the transaction to is the correct address."}),(0,n.jsxs)(i.rU,{href:"https://ethereum.org/en/staking/deposit-contract/",target:"_blank",children:["Check deposit contract address",(0,n.jsx)(i.ZJ,{})]}),(0,n.jsx)(h.YG,{control:t,text:"I know how to check that I am sending my ETH into the correct deposit contract and have done so.",name:"checkboxesStatus.3"})]})]}),(0,n.jsxs)(i.W2,{className:"enr-section",alignItems:"start",css:{gap:"$lg"},children:[(0,n.jsx)(i.kC,{direction:"column",css:{gap:"$xs"},children:(0,n.jsx)(i.xv,{variant:"h4",children:"Protect Yourself Against Double Deposits"})}),(0,n.jsxs)(i.kC,{direction:"column",css:{gap:"$xl",width:"auto"},children:[(0,n.jsx)(i.sQ,{heading:"You are responsible for the transaction! Duplicate deposits with the same keyfile public key will be considered as a double deposit. Any extra balance more than 32 ETH will NOT be counted in your effective balance on the Beacon Chain. Ensure there is no existing deposit for this public key before you make your deposit."}),(0,n.jsx)(i.sQ,{heading:(0,n.jsxs)(n.Fragment,{children:["Do not submit any transaction with a ",(0,n.jsx)(i.xv,{variant:"pill",color:"create",children:r.rk})," file that you did not create yourself, or that you do not own the mnemonic phrase or keystore for."]})}),(0,n.jsx)(i.sQ,{heading:(0,n.jsxs)(n.Fragment,{children:["Wait at least 30 minutes before trying to resubmit a\n                transaction with this ",(0,n.jsx)(i.xv,{variant:"pill",color:"create",children:r.rk})," file. This will give our on-chain data source time to flag any\n                duplicate deposits."]})}),(0,n.jsx)(h.YG,{control:t,text:"I understand that there is no advantage to depositing more than once per validator. Any extra ETH sent in a duplicate deposit will not be counted in my effective validator balance and I may encounter difficulties in withdrawing it.",name:"checkboxesStatus.4"})]}),(0,n.jsxs)(i.kC,{children:[(0,n.jsx)(i.zx,{css:{width:"25%",backgroundColor:"$bg03",color:"$body",marginRight:"$sm"},fullWidth:!0,onClick:()=>{p.push("/deposit/connect-wallet")},children:"Back"}),(0,n.jsx)(i.zx,{type:"submit",disabled:!s||!u,fullWidth:!0,children:"Continue"})]})]})]})})]})};t.default=u,u.layout="DepositProgressTrackerLayout"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1619)}),_N_E=e.O()}]);