import { getEmployees } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    window.alert(`${employee.name} sold ${employee.id} product(s).`)
                }
            }
        }
    }
)

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

