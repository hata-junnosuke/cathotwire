// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// コントローラーを登録する
import FormController from "controllers/form_controller"
application.register("form", FormController)

import ModalController from "controllers/modal_controller"
application.register("modal", ModalController)