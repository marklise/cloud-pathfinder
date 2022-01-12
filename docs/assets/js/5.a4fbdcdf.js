(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{428:function(e,t,a){e.exports=a.p+"assets/img/06_persistent_storage_01.a42ffca1.png"},429:function(e,t,a){e.exports=a.p+"assets/img/06_persistent_storage_02.2f5d64f9.png"},430:function(e,t,a){e.exports=a.p+"assets/img/06_persistent_storage_03.f3b88ce3.png"},431:function(e,t,a){e.exports=a.p+"assets/img/06_persistent_storage_04a.ec1b8cfe.png"},432:function(e,t,a){e.exports=a.p+"assets/img/06_persistent_storage_04b.0f8e0e0c.png"},433:function(e,t,a){e.exports=a.p+"assets/img/06_persistent_storage_07.9972febf.png"},434:function(e,t,a){e.exports=a.p+"assets/img/06_persistent_storage_08.4ef9f63f.png"},435:function(e,t,a){e.exports=a.p+"assets/img/06_persistent_storage_09.617c478e.png"},436:function(e,t,a){e.exports=a.p+"assets/img/06_persistent_storage_10.6ddeec29.png"},486:function(e,t,a){"use strict";a.r(t);var o=a(32),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"persistent-storage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#persistent-storage"}},[e._v("#")]),e._v(" Persistent Storage")]),e._v(" "),o("p",[e._v("Up to this point you have leveraged a single mongodb pod with ephemeral storage. In order to maintain the\napplication data, persistent storage is required.")]),e._v(" "),o("ul",[o("li",[e._v("Let's first take a look at our application prior to this lab\n"),o("img",{attrs:{src:a(428),alt:""}})])]),e._v(" "),o("h3",{attrs:{id:"deleting-pods-with-ephemeral-storage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deleting-pods-with-ephemeral-storage"}},[e._v("#")]),e._v(" Deleting Pods with Ephemeral Storage")]),e._v(" "),o("p",[o("strong",[e._v("Objective")]),e._v(": Observe that by using ephemeral storage causes RocketChat to lose any previous data or configuration after a redeployment.")]),e._v(" "),o("p",[e._v("To understand what will happen when a pod with ephemeral storage is removed,")]),e._v(" "),o("ul",[o("li",[e._v("Scale down both the rocketchat and mongo applications to 0 pods"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] scale deployment/rocketchat-[username] dc/mongodb-[username] --replicas=0\n")])])])]),e._v(" "),o("li",[e._v("Scale back up each application pod to 1 replica"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] scale deployment/rocketchat-[username] dc/mongodb-[username] --replicas=1\n")])])])])]),e._v(" "),o("p",[o("img",{attrs:{src:a(429),alt:""}})]),e._v(" "),o("h3",{attrs:{id:"adding-storage-to-existing-deployment-configurations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-storage-to-existing-deployment-configurations"}},[e._v("#")]),e._v(" Adding Storage to Existing Deployment Configurations")]),e._v(" "),o("p",[o("strong",[e._v("Objective")]),e._v(": Add persistent storage to MongoDB so that it won't lose data created by RocketChat.")]),e._v(" "),o("p",[e._v("Now that we notice all messages and configuration is gone whenever pods cycle, let's add persistent storage to the mongodb pod.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Scale down both the rocketchat and mongo applications to 0 pods")]),e._v(" "),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] scale deployment/rocketchat-[username] dc/mongodb-[username] --replicas=0\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Remove the emptyDir Storage by navigating to the mongodb deploymentconfig\n"),o("img",{attrs:{src:a(430),alt:""}})])]),e._v(" "),o("li",[o("p",[e._v("Add a new volume by navigating to "),o("code",[e._v("Administrator -> Storage -> Persitant Volume Claims -> Create Persistant Volume Claims")]),e._v(" and name it "),o("code",[e._v("mongodb-[username]-file")])])])]),e._v(" "),o("p",[o("img",{attrs:{src:a(431),alt:""}})]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Select the "),o("code",[e._v("managed-premium")]),e._v(" storage class. Set the type to RWO, the size to 1GB, and name it "),o("code",[e._v("mongodb-[username]-file")])])]),e._v(" "),o("li",[o("p",[e._v("Navigate back to your Mongo DeploymentConfig and select "),o("code",[e._v("Add Storage")]),e._v(" from the "),o("code",[e._v("Actions")]),e._v(" Tab")])]),e._v(" "),o("li",[o("p",[e._v("The mount path is "),o("code",[e._v("/var/lib/mongodb/data")]),e._v(" "),o("img",{attrs:{src:a(432),alt:""}})])])]),e._v(" "),o("blockquote",[o("p",[e._v("PLEASE NOTE: The storage classes you are interacting with are specific to this Azure-based Openshift Cluster. The production Openshift Cluster utilizes different storage classes. From an application perspective that are slight differences in performance typically but the implementation remains the same.")])]),e._v(" "),o("ul",[o("li",[e._v("Scale up "),o("code",[e._v("mongodb-[username]")]),e._v(" instance to 1 pod"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] scale dc/mongodb-[username] --replicas=1\n")])])])]),e._v(" "),o("li",[e._v("When mongo is running, scale "),o("code",[e._v("rocketchat-[username]")]),e._v(" to 1 pod"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] scale deployment/rocketchat-[username] --replicas=1\n")])])])]),e._v(" "),o("li",[e._v("Access the RocketChat URL and complete the Setup Wizard again")]),e._v(" "),o("li",[e._v("Scale down and scale back up both the database and the rocketchat app"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] scale deployment/rocketchat-[username] dc/mongodb-[username] --replicas=0\n# Scale up MongoDB to 1 replica; and\noc -n [-dev] scale dc/mongodb-[username] --replicas=1\n# Scale up RocketChat to 1 replica\noc -n [-dev] scale deployment/rocketchat-[username] --replicas=1\n")])])])]),e._v(" "),o("li",[e._v("Verify that data was persisted by accessing RocketChat URL and observing that it doesn't show the Setup Wizard.")])]),e._v(" "),o("h4",{attrs:{id:"rwo-storage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rwo-storage"}},[e._v("#")]),e._v(" RWO Storage")]),e._v(" "),o("p",[e._v("RWO Storage is analagous to attaching a physical disk to a pod. For this reason, RWO storage "),o("strong",[e._v("cannot be mounted to more than 1 pod at the same time")]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Objective")]),e._v(": Cause deployment error by using the wrong deployment strategy for the storage class.")]),e._v(" "),o("p",[e._v("RWO storage (which was selected above) can only be attached to a single pod at a time, which causes issues in certain deployment strategies.")]),e._v(" "),o("ul",[o("li",[e._v("Ensure your "),o("code",[e._v("mongodb-[username]")]),e._v(" deployment strategy is set to `Rolling and then trigger a redeployment.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(433),alt:""}})]),e._v(" "),o("ul",[o("li",[e._v("Notice and investigate the issue")])]),e._v(" "),o("blockquote",[o("p",[e._v("rolling deployments will start up a new version of your application pod before killing the previous one. There is a brief moment where two pods for the mongo application exist at the same time. Because the storage type is "),o("strong",[e._v("RWO")]),e._v(" it is unable to mount to two pods at the same time. This will cause the rolling deployment to hang and eventually time out.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(434),alt:""}})]),e._v(" "),o("ul",[o("li",[e._v("Switch to recreate")])]),e._v(" "),o("h3",{attrs:{id:"rwx-storage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rwx-storage"}},[e._v("#")]),e._v(" RWX Storage")]),e._v(" "),o("p",[o("strong",[e._v("Objective")]),e._v(": Cause MongoDB to corrupt its data file by using the wrong storage class for MongoDB.")]),e._v(" "),o("p",[e._v("RWX storage allows multiple pods to access the same PV at the same time.")]),e._v(" "),o("ul",[o("li",[e._v("Scale down "),o("code",[e._v("mongodb-[username]")]),e._v(" to 0 pods"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] scale dc/mongodb-[username] --replicas=0\n")])])])])]),e._v(" "),o("p",[o("img",{attrs:{src:a(435),alt:""}})]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Remove the previous storage volume and recreate as "),o("code",[e._v("managed-premium")]),e._v(" (mounting at "),o("code",[e._v("/var/lib/mongodb/data")]),e._v(") with type RWX, and naming it "),o("code",[e._v("mongodb-[username]-file-rwx")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(436),alt:""}})]),e._v(" "),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] rollout pause dc/mongodb-[username] \n# Remove all volumes\noc -n [-dev] get dc/mongodb-[username] -o jsonpath='{.spec.template.spec.volumes[].name}{\"\\n\"}' | xargs -I {} oc -n [-dev] set volumes dc/mongodb-[username] --remove '--name={}'\n\n# Add a new volume by creating a PVC. If the PVC already exists, omit '--claim-class', '--claim-mode', and '--claim-size' arguments\noc -n [-dev] set volume dc/mongodb-[username] --add --name=mongodb-[username]-data -m /var/lib/mongodb/data -t pvc --claim-name=mongodb-[username]-file --claim-class=managed-premium --claim-mode=ReadWriteMany --claim-size=1G\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Scale up "),o("code",[e._v("mongodb-[username]")]),e._v(" to 1 pods")]),e._v(" "),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] scale dc/mongodb-[username] --replicas=1\n")])])])]),e._v(" "),o("li",[o("p",[e._v("Redeploy with Rolling deployment")]),e._v(" "),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("# you can resume rollout; or\noc -n [-dev] rollout resume dc/mongodb-[username]\noc -n [-dev] rollout latest dc/mongodb-[username]\n")])])])])]),e._v(" "),o("h3",{attrs:{id:"fixing-it"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fixing-it"}},[e._v("#")]),e._v(" Fixing it")]),e._v(" "),o("p",[o("strong",[e._v("Objective")]),e._v(": Fix corrupted MongoDB storage by using the correct storage class for MongoDB.")]),e._v(" "),o("p",[e._v("After using the "),o("code",[e._v("azure-file")]),e._v(" storage class (RWX) with rolling deployment, you got to a point where your mongodb is now corrupted. That happens because MongoDB does NOT support multiple processes/pods reading/writing to the same location/mount ("),o("code",[e._v("/var/lib/mongodb/data")]),e._v(") of single/shared pvc.")]),e._v(" "),o("p",[e._v("To fix that we will need to replace the "),o("code",[e._v("RWX")]),e._v(" PVC with a "),o("code",[e._v("RWO")]),e._v(" PVC and change the deployment strategy from "),o("code",[e._v("Rolling")]),e._v(" to "),o("code",[e._v("Recreate")]),e._v(" as follow:")]),e._v(" "),o("ul",[o("li",[e._v("Scale down "),o("code",[e._v("rocketchat-[username]")]),e._v(" to 0 pods"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] scale deployment/rocketchat-[username] --replicas=0\n")])])])]),e._v(" "),o("li",[e._v("Scale down "),o("code",[e._v("mongodb-[username]")]),e._v(" to 0 pods"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] scale dc/mongodb-[username] --replicas=0\n")])])])]),e._v(" "),o("li",[e._v("Go to the "),o("code",[e._v("mongodb-[username]")]),e._v(" DeploymentConfig and "),o("code",[e._v("Pause Rollouts")]),e._v(" (under "),o("code",[e._v("Actions")]),e._v(" menu on the top right side)"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("  oc -n [-dev] rollout pause dc/mongodb-[username]\n")])])])]),e._v(" "),o("li",[e._v("Remove all existing volumes on "),o("code",[e._v("mongodb-[username]")]),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("# Remove all volumes\noc -n [-dev] get dc/mongodb-[username] -o jsonpath='{.spec.template.spec.volumes[].name}{\"\\n\"}' | xargs -I {} oc -n [-dev] set volumes dc/mongodb-[username] --remove '--name={}'\n")])])])]),e._v(" "),o("li",[e._v("Attach a new volume using the existing "),o("code",[e._v("mongodb-[username]-file")]),e._v(" PVC"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] set volume dc/mongodb-[username] --add --name=mongodb-[username]-data -m /var/lib/mongodb/data -t pvc --claim-name=mongodb-[username]-file\n")])])])]),e._v(" "),o("li",[e._v("Change the deployment strategy to use "),o("code",[e._v("Recreate")]),e._v(" deployment strategy"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('oc -n [-dev] patch dc/mongodb-[username] -p \'{"spec":{"strategy":{"activeDeadlineSeconds":21600,"recreateParams":{"timeoutSeconds":600},"resources":{},"type":"Recreate"}}}\'\n')])])])]),e._v(" "),o("li",[e._v("Go to the "),o("code",[e._v("mongodb-[username]")]),e._v(" DeploymentConfig and "),o("code",[e._v("Resume Rollouts")]),e._v(" (under "),o("code",[e._v("Actions")]),e._v(" menu on the top right side)"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] rollout resume dc/mongodb-[username]\n")])])])]),e._v(" "),o("li",[e._v("Check if a new deployment is being rollout. If not, please do a manual deployment by clicking on "),o("code",[e._v("Deploy")]),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("  oc -n [-dev] rollout latest dc/mongodb-[username]\n")])])])]),e._v(" "),o("li",[e._v("Scale up "),o("code",[e._v("mongodb-[username]")]),e._v(" to 1 pod, and wait for the pod to become ready"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] scale dc/mongodb-[username] --replicas=1\n")])])])]),e._v(" "),o("li",[e._v("Scale up "),o("code",[e._v("rocketchat-[username]")]),e._v(" to 1 pod, and wait for the pod to become ready"),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] scale deployment/rocketchat-[username] --replicas=1\n")])])])]),e._v(" "),o("li",[e._v("Check deployment and make sure "),o("code",[e._v("mongodb-[username]-file-rwx")]),e._v(" PVCs are not being used, and delete those PVCs."),o("div",{staticClass:"language-oc:cli extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("oc -n [-dev] delete pvc/mongodb-[username]-file-rwx\n")])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);