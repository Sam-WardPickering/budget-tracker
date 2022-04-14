import { Modal, Button, Stack } from "react-bootstrap"
import { UNCATEGORISED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext"

export default function ViewExpensesModal({ budgetId, handleClose }) {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets()

  const budget = UNCATEGORISED_BUDGET_ID === budgetId
    ? { name: "Uncategorised", id: UNCATEGORISED_BUDGET_ID }
    : budgets.find(b => b.id === budgetId)

  return (
    <Modal show={budgetId != null} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <Stack direction="horizontal" gap="2">
                        <div>Expenses - {budget?.name}</div>
                        {budgetId !== UNCATEGORISED_BUDGET_ID && (
                            <Button 
                            onClick={() => {
                                deleteBudget(budget)
                                handleClose()
                            }}
                            variant="outline-danger"
                            >
                                Delete
                            </Button>
                        )}
                    </Stack>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
               
            </Modal.Body>
    </Modal>
  )
}

