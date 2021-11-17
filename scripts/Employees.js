import { getEmployees, getOrders } from "./database.js"

const orders = getOrders()
const employees = getEmployees()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let numberOrders = 0;
        let employeeName = ""
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            for (const order of orders) {
                if (order.employeeId === parseInt(employeeId)) {
                    numberOrders = numberOrders + 1;
                }
            }
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    employeeName = employee.name
                }
            }
        }
    
        window.alert(`${employeeName} sold ${numberOrders}`)
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}